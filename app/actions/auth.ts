import bcrypt from "bcrypt"
import { createSession } from "../lib/session"
import { redirect } from "next/navigation"

export async function login(formData : FormData) {
    "use server"
    const loginName = formData.get("login")
    const password = formData.get("password");

    if(!loginName || !password){
        console.log("Login or password are empty")
        return
    }

    const isLoginCorrect = loginName == process.env.ADMIN_NAME
    const isPasswordCorrect = bcrypt.compare(password.toString(), process.env.ADMIN_PASSWORD_HASH as string)

    if(!isLoginCorrect) {
        console.log("login incorrect")
        return
    }

    if(!isPasswordCorrect){
        console.log("password incorrect")
        return 
    }

    await createSession("1", "admin")

    redirect("/admin")

}