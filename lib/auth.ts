"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Hardcoded credentials for mock authentication
const MOCK_EMAIL = "admin@threadcraft.bd"
const MOCK_PASSWORD = "password123"
const AUTH_COOKIE_NAME = "auth_token"

export interface User {
  email: string
  name: string
}

export async function login(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Validate credentials against hardcoded values
  if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
    // Set authentication cookie
    const cookieStore = await cookies()
    cookieStore.set(AUTH_COOKIE_NAME, JSON.stringify({ email, name: "Admin User" }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return { success: true }
  }

  return { success: false, error: "Invalid email or password" }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(AUTH_COOKIE_NAME)
  redirect("/login")
}

export async function getUser(): Promise<User | null> {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get(AUTH_COOKIE_NAME)

  if (!authCookie?.value) {
    return null
  }

  try {
    return JSON.parse(authCookie.value) as User
  } catch {
    return null
  }
}

export async function requireAuth(): Promise<User> {
  const user = await getUser()
  if (!user) {
    redirect("/login")
  }
  return user
}
