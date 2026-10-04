import assert from "node:assert/strict"
import { after, beforeEach, test } from "node:test"
import {
  createAdminSession,
  isAdminConfigured,
  verifyAdminCredentials,
  verifyAdminSession,
} from "../lib/admin-auth.ts"

const envNames = ["ADMIN_USERNAME", "ADMIN_PASSWORD", "ADMIN_SESSION_SECRET"]
const originalEnv = Object.fromEntries(envNames.map((name) => [name, process.env[name]]))

beforeEach(() => {
  process.env.ADMIN_USERNAME = "test-admin"
  process.env.ADMIN_PASSWORD = "a-test-password"
  process.env.ADMIN_SESSION_SECRET = "a-test-secret-that-is-at-least-32-characters"
})

after(() => {
  for (const name of envNames) {
    if (originalEnv[name] === undefined) delete process.env[name]
    else process.env[name] = originalEnv[name]
  }
})

test("admin access fails closed when configuration is missing or incomplete", () => {
  for (const name of envNames) {
    const value = process.env[name]
    delete process.env[name]
    assert.equal(isAdminConfigured(), false)
    assert.equal(verifyAdminCredentials("test-admin", "a-test-password"), false)
    assert.equal(verifyAdminSession("true"), false)
    assert.throws(createAdminSession, /not configured/)
    process.env[name] = value
  }
  process.env.ADMIN_SESSION_SECRET = "too-short"
  assert.equal(isAdminConfigured(), false)
})

test("credentials accept only the configured string values", () => {
  assert.equal(verifyAdminCredentials("test-admin", "a-test-password"), true)
  assert.equal(verifyAdminCredentials("another-user", "a-test-password"), false)
  assert.equal(verifyAdminCredentials("test-admin", "wrong-password"), false)
  assert.equal(verifyAdminCredentials({}, null), false)
})

test("a signed session validates across requests without stored server state", () => {
  assert.equal(verifyAdminSession(createAdminSession()), true)
})

test("legacy, malformed, and tampered cookies cannot grant admin access", () => {
  for (const cookie of [undefined, "", "true", "123.invalid", "1." + "a".repeat(64)]) {
    assert.equal(verifyAdminSession(cookie), false)
  }
  const session = createAdminSession()
  const [expiry, signature] = session.split(".")
  assert.equal(verifyAdminSession(`${Number(expiry) + 3600}.${signature}`), false)
  const alteredSignature = (signature[0] === "a" ? "b" : "a") + signature.slice(1)
  assert.equal(verifyAdminSession(`${expiry}.${alteredSignature}`), false)
})

test("an expired session is rejected even with a valid signature", (context) => {
  const now = Date.now()
  const clock = context.mock.method(Date, "now", () => now - 25 * 60 * 60 * 1000)
  const expiredSession = createAdminSession()
  clock.mock.restore()
  assert.equal(verifyAdminSession(expiredSession), false)
})

test("rotating the session secret invalidates existing sessions", () => {
  const session = createAdminSession()
  process.env.ADMIN_SESSION_SECRET = "a-different-secret-that-is-at-least-32-characters"
  assert.equal(verifyAdminSession(session), false)
})
