'use client'
import Link from "next/link"
import { signOut } from "next-auth/react"
import Divider from '@mui/material/Divider';
import { useSession } from "next-auth/react"
export default function NavBar() {
    
    const {data: session, status}=useSession()
  return (
   <nav className="bg-produkt p-4 sticky w-full top-0 mb-7 drop-shadow-lg z-10">
    <div className="prose prose=xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
         <Link href='/' className="text-yellow-200/90 no-underline hover:text-yellow-200">produktize</Link>
         </h1>
         <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-xl lg:text-2xl">
                    <Link className=" p-2 text-white/80 hover:text-white" href="/">
                       Home 
                    </Link>
                    <Divider orientation="vertical" flexItem />
                    <Link className=" p-2 text-white/80 hover:text-white hover:border-r-blue-400" href="/main/profile">
                        Profile
                    </Link>
                    <Divider orientation="vertical" flexItem />
                    <Link className="p-2 text-white/80 hover:text-white hover:border-r-blue-400" href="/main">
                        Main
                    </Link>
                    <Divider orientation="vertical" flexItem />
                    <Link className=" p-2 text-white/80 hover:text-white hover:border-r-blue-400" href="/main/skillLevel">
                        Your Skill
                    </Link>
                    <Divider orientation="vertical" flexItem />
                    <Link className=" p-2 text-white/80 hover:text-white hover:border-r-blue-400" href="/main/history">
                       Test History
                    </Link>
                    <Divider orientation="vertical" flexItem />
                    {status =='authenticated' &&   <p className=" p-2 text-white/80 hover:text-white hover:border-r-blue-400" onClick={()=>signOut({callbackUrl: '/'})}>
                       Logout
                    </p>}
                  
                   
                </div>
    </div>
   
   </nav>
  )
}
