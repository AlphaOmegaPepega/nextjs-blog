'use client'
import Link from "next/link"
import { signOut } from "next-auth/react"
import Divider from '@mui/material/Divider';
import { useSession } from "next-auth/react"
export default function NavBar() {
    
    const {data: session, status}=useSession()
  return (
   <nav className="bg-produkt p-4 sticky w-full top-0 mb-7 drop-shadow-lg z-10">
    <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-4xl font-bold text-white grid place-content-center mb-2 md:mb-0 ">
         <Link href='/' className="text-yellow-200/90 no-underline hover:text-yellow-200">produktize</Link>
         </h1>
         <div className="relative flex flex-row justify-center mob:justify-evenly align-middle gap-4 text-white text-xl lg:text-2xl mob:text-sm  sm:top-0 mob:top-5">                  
         <Link className="relative  p-2 text-white/80 hover:text-white hover:border-r-blue-400" href="/main">
                        Main
                    </Link>

                    <Link className="relative p-2 text-white/80 hover:text-white hover:border-r-blue-400" href="/main/profile">
                        Profile
                    </Link>
                   
                  
                  
                    <Link className="relative sm:bottom-0 mob:bottom-2 p-2 text-white/80 hover:text-white hover:border-r-blue-400" href="/main/skillLevel">
                        Your Skill
                    </Link>
                
                    <Link className="relative p-2 sm:bottom-0 mob:bottom-2 text-white/80 hover:text-white hover:border-r-blue-400" href="/main/history">
                       Test History
                    </Link>
                  
                    {status =='authenticated' &&   <p className="relative p-2 text-white/80 hover:text-white hover:border-r-blue-400" onClick={()=>signOut({callbackUrl: '/'})}>
                       Logout
                    </p>}
                  
                   
                </div>
    </div>
   
   </nav>
  )
}
