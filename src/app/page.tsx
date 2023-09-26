
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import { useEffect } from 'react'

export default  function Home() {
  const {data: session, status}=useSession()
  const router = useRouter()
  useEffect(()=>{
    if(session){
      router.push('/main')
    }
  },[session])
 

  
  return (
    <main className='textPage' >
      <h1 className='relative text-9xl w-2/6  m-20  text-white'>Product Managment skill map</h1>
      <img src='/img/title.png' className='w-1/4 absolute left-2/4 top-48'/>
     <p className='text-4xl m-20 w-10/12 text-white'> Welcome to the Productize Product Management Skill map.
      This tool has been used by us for many years in order to track the skill development of ourselves and the many product teams we have led. 
      It will help you describe the skill expectations you have for a specific role or prep for the yearly review. For Product Managers and Leads.</p>
      {!session && <p className='mx-20 w-11% text-center text-white text-2xl p-6 bg-pink-600 rounded-full'><Link href='/api/auth/signin/google' >Sign in</Link></p>}
      
    </main>
  
  )
}
