'use client'
import React from 'react'
import { useSession } from "next-auth/react"
import Avatar from '@mui/material/Avatar';
export default function Profile() {
  const {data: session, status}=useSession()
  
  return (
    <main>
      <h1 className='text-center text-white text-6xl my-1%'>PROFILE</h1>
      <section className='bg-white flex flex-row p-1%'>
    <section className='mr-5%'>
    <Avatar alt={session?.user?.name} src={session?.user?.image}  sx={{ width: 150, height: 150 }} />
    
    
    </section>
    <section className='col-span-2'>
      <h2 className='text-5xl relative -top-3'>{session?.user?.name}</h2>
      <p>Information</p>
      <p>Information</p>
      <p>Information</p>
      <p>Information</p>
      <p>Information</p>
      <p>Information</p>
      <p>Information</p>
      <p>Information</p>

    
    
    
    </section>
    
      </section>
      <section className='sticky pl-36% bg-white flex flex-row text-center p-1% text-2xl'>
      <p className='p-1% bg-pink-600 rounded-full w-15% mx-1% ' >Button 1</p>
      <p className='p-1% bg-pink-600 rounded-full w-15% mx-1%' >Button 2</p>
      </section>
    </main>
  )
}
