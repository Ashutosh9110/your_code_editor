"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"



export default function LoginPage() {

  const [ email, setEmail ] = useState("")
  const [ passoword, setPassword ] = useState("")
  const [ error, setError ] = useState("")
  const router = useRouter()


  const handleLogin = async (e : React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/auth/login", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({ email, passoword })
    })

    if (res.ok) {
      router.push("/dashboard")
    }  else {
      setError("Invalid Credential")
    }
  }
  
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h2 className="font-semibold text-4xl text-center my-10">Login</h2>
      <form 
      onSubmit={handleLogin}
      className="space-y-4 text-center"
      >
        <input className="border p-2 rounded w-full" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="border p-2 rounded w-full" type="passoword" placeholder="passoword" value={passoword} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white px-16 py-2 rounded" type="submit">Login</button>

  
      </form>
    </div>
  )

}