
"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { json } from "stream/consumers"


export default function SignUpPage () {

const [ email, setEmail ] = useState("")
const [ password, setPassword ] = useState("")
const [ error, setError ] = useState("")
const router = useRouter()


  const handleLogin = async (e: React.FormEvent) => {

    e.preventDefault()
    const res = await fetch("auth/signup", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body : JSON.stringify({ email, password})
    })
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="font-semibold py-5 text-4xl">Login</h2>
      <form onSubmit={handleLogin} className="">
        <input className="border p-2 rounded w-full" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="border p-2 rounded w-full" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-teal-600 rounded block mx-auto mt-5 text-white px-16 py-2">Login</button>
      </form>
    </div>
  )




}