// Demo authentication. Replace this with your backend login endpoint when the API is ready.
import type { User } from "../../types/auth.types";
export async function loginRequest(email: string, password: string): Promise<User> {
  await new Promise(resolve => setTimeout(resolve, 350));
  if (!email.includes("@") || password.length < 4) throw new Error("Enter a valid email and a password of at least 4 characters.");
  return { email, name: email.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, c => c.toUpperCase()), role: "Admin" };
}
