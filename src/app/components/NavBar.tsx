'use client'
import Link from "next/link"
import { signOut } from "next-auth/react"
export default function NavBar() {
  return (
   <nav className="bg-violet-800 p-4 sticky top-0 drop-shadow-lg z-10">
    <div className="prose prose=xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
         <Link href='/' className="text-yellow-200/90 no-underline hover:text-yellow-200">produktize</Link>
         </h1>
         <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-xl lg:text-2xl">
                    <Link className="border-r-2 p-2 text-white/80 hover:text-white hover:border-r-blue-400" href="/">
                       Home 
                    </Link>
                    <Link className="border-r-2 p-2 text-white/80 hover:text-white hover:border-r-blue-400" href="">
                        Profile
                    </Link>
                    <Link className="border-r-2 p-2 text-white/80 hover:text-white hover:border-r-blue-400" href="/main">
                        Main
                    </Link>
                    <Link className="border-r-2 p-2 text-white/80 hover:text-white hover:border-r-blue-400" href="/main/skillLevel">
                        Your Skill
                    </Link>
                    <Link className="border-r-2 p-2 text-white/80 hover:text-white hover:border-r-blue-400" href="/main/history">
                       Test History
                    </Link>
                    <p className="border-r-2 p-2 text-white/80 hover:text-white hover:border-r-blue-400" onClick={()=>signOut({callbackUrl: '/'})}>
                       Logout
                    </p>
                   
                </div>
    </div>
   
   </nav>
  )
}
