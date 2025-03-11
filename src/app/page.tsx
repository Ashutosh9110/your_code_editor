"use client"

import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";



export default function Dashboard () {

  return (
    <SessionProvider>
      <Home />
    </SessionProvider>
  )
}



function Home() {

  const session = useSession()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {session.status === "authenticated" && <button onClick={() => signOut()}>Logout</button>}

        {session.status === "unauthenticated" && <button onClick={() => signIn()}>Login</button>}

    </div>
  );
}
