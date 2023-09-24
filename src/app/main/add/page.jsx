'use client'
import React from 'react'
import { useSession } from "next-auth/react"
import Avatar from '@mui/material/Avatar';
export default function page() {
  const {data: session, status}=useSession()
  
  return (
    <main>
      <h1 className='text-center text-white text-6xl my-1%'>Add Learnings</h1>
     
    </main>
  )
}
