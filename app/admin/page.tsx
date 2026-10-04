import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { adminCookieName, verifyAdminSession } from "@/lib/admin-auth"

export default async function AdminPage() {
  const cookieStore = await cookies()
  const isAuthenticated = verifyAdminSession(cookieStore.get(adminCookieName)?.value)

  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  return <AdminDashboard />
}
