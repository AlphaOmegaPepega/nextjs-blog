'use client'
import React, { Suspense, useEffect,useRef,useState } from 'react'
import { useSession } from "next-auth/react"
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { signOut } from "next-auth/react"
import getAllUsers from '@/lib/getAllUsers';
import getPersonal from '@/lib/getQuestions';
import Link from 'next/link';
export default function Profile() {
  const {data: session, status}=useSession()
  const [entry,SetEntry]=useState(0)
 useEffect(()=>{
  try{
    if(status=='authenticated'){
    const getData=async ()=>{
const user=await getAllUsers(session.user.email)
const question=await getPersonal(user._id)
if(question){
  SetEntry(question.length)
}
const notes=await axios.get(`https://produktize-api.onrender.com/notes/${user._id}`)
console.log(notes)
if(!notes.data.length){
  axios.post(`https://produktize-api.onrender.com/notes/`,{
    user:user._id,
  })
}
}
getData()
    }
  }catch(error){
    console.log(error)
  }

  


 },[status])




const handleNotes=()=>{

}



  const handleDelete=()=>{
    axios.delete(`https://produktize-api.onrender.com/users/${session.user.email}`)
    signOut({callbackUrl: '/'})
  }


  return (
    <main>
      <h1 className='text-center text-white text-6xl my-1%'>PROFILE</h1>
      <section className='bg-white flex flex-row p-1%'>
    <section className='mr-5%'>
    <Avatar alt={session?.user?.name} src={session?.user?.image}  sx={{ width: 150, height: 150 }} />
    
    
    </section>
    <section className='col-span-2'>
      <h2 className='text-5xl relative -top-3 p-5'>{session?.user?.name}</h2>
   
<p className='text-xl p-2 px-5'>Your email: {session?.user?.email}</p>
<p className='text-xl p-2 px-5'>Your amount of test entries: {entry}</p>
    
    
    
    </section>
    
      </section>
      <section className='relative pl-36% bg-white text-center p-1% text-2xl h-80'>
      <Link href='profile/notes'><p className='p-1% bg-pink-600 rounded-full  mx-1% cursor-pointer absolute bottom-4 left-3 text-white '>Add note</p></Link>
      <p className='p-1% bg-pink-800 rounded-full text-lg  mx-1% cursor-pointer absolute bottom-4 right-3 text-white ' onClick={handleDelete}>Delete account</p>
      </section>
    </main>
  )
}
