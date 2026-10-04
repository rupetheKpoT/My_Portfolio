import { createHash, createHmac, timingSafeEqual } from "node:crypto"

export const adminCookieName = "admin-auth"
export const adminSessionMaxAge = 60 * 60 * 24

export function isAdminConfigured() {
  return Boolean(
    process.env.ADMIN_USERNAME &&
      process.env.ADMIN_PASSWORD &&
      process.env.ADMIN_SESSION_SECRET &&
      process.env.ADMIN_SESSION_SECRET.length >= 32,
  )
}

function constantTimeEqual(actual: string, expected: string) {
  return timingSafeEqual(
    createHash("sha256").update(actual).digest(),
    createHash("sha256").update(expected).digest(),
  )
}

export function verifyAdminCredentials(username: unknown, password: unknown) {
  if (!isAdminConfigured() || typeof username !== "string" || typeof password !== "string") {
    return false
  }

  const usernameMatches = constantTimeEqual(username, process.env.ADMIN_USERNAME!)
  const passwordMatches = constantTimeEqual(password, process.env.ADMIN_PASSWORD!)
  return usernameMatches && passwordMatches
}

export function createAdminSession() {
  if (!isAdminConfigured()) {
    throw new Error("Admin access is not configured")
  }

  const expiresAt = String(Math.floor(Date.now() / 1000) + adminSessionMaxAge)
  const signature = createHmac("sha256", process.env.ADMIN_SESSION_SECRET!)
    .update(expiresAt)
    .digest("hex")
  return `${expiresAt}.${signature}`
}

export function verifyAdminSession(session: string | undefined) {
  if (!isAdminConfigured() || !session) {
    return false
  }

  const match = /^(\d+)\.([a-f0-9]{64})$/.exec(session)
  if (!match || Number(match[1]) <= Math.floor(Date.now() / 1000)) {
    return false
  }

  const expectedSignature = createHmac("sha256", process.env.ADMIN_SESSION_SECRET!)
    .update(match[1])
    .digest("hex")
  return constantTimeEqual(match[2], expectedSignature)
}
