import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import {
  adminCookieName,
  adminSessionMaxAge,
  createAdminSession,
  isAdminConfigured,
  verifyAdminCredentials,
} from "@/lib/admin-auth"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  if (!isAdminConfigured()) {
    return NextResponse.json({ error: "Admin access is not configured" }, { status: 503 })
  }

  try {
    const { username, password } = await request.json()

    if (verifyAdminCredentials(username, password)) {
      const cookieStore = await cookies()
      cookieStore.set(adminCookieName, createAdminSession(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: adminSessionMaxAge,
        path: "/",
      })

      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
  } catch {
    return NextResponse.json({ error: "Invalid login request" }, { status: 400 })
  }
}
