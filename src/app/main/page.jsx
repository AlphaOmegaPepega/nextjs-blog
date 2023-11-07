'use client'
import React from 'react'
import { useSession } from "next-auth/react"
import Link from 'next/link'
import getAllUsers from '@/lib/getAllUsers'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Main() {
  
  const date = new Date();
  const {data: session, status}=useSession()
const [ids,setIds]=useState('')
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
const [name,setName]=useState('User')
const currentDate = `${day}-${month}-${year}`;
const router = useRouter()
useEffect(()=>{
  
const getData=async()=>{
 
  if(status=='authenticated'){
  

  const userData=await getAllUsers(session?.user?.email)
  if(!userData){
    axios.post(`https://produktize-api.onrender.com/users`,{
      email:session?.user?.email,
      date:currentDate
    })
router.push('/main/profile')
  }else{
    setIds(userData._id)
  }
 

}


}
getData()

console.log(name)
if (session){
  setName(session?.user?.name)

  
}
},[status])


 




const handleStart=()=>{
  
  const endpoints = ['communication', 'Delivery', 'Design', 'Disscovery', 'IndustryKnwlg', 'Stakeholder', 'Vision'];
  const postData = async (endpoint) => {
    return axios.post(`https://produktize-api.onrender.com/${endpoint}`,{
      user:ids,
      date:currentDate
    });

  }
  Promise.all(endpoints.map(endpoint => postData(endpoint)));
  axios.post(`https://produktize-api.onrender.com/notes`,{
    user:ids
  })
}
  return (
    <main className='w-full'>
   <section className='2xl:ml-10 2xl:mt-20 1.5xl:mt-0 lg:ml-10 2xl:text-left 1.5xl:text-center xl:text-center lg:text-center md:text-center sm:text-center mob:text-center'>
      <h1 className='text-white 2xl:text-title 1.5xl:text-title xl:text-8xl lg:text-8xl md:text-6xl sm:text-5xl mob:text-4xl'> Welcome,</h1>   
      
      <h1 className='text-white relative 2xl:text-title 2xl:bottom-0 1.5xl:text-title 1.5xl:top-1  xl:text-8xl lg:text-8xl lg:bottom-0 md:text-6xl sm:text-5xl mob:text-4xl'>{name}</h1>
      </section>
<section className='relative px-8 2xl:mt-18 lg:py-8 lg:px-10 2xl:ml-0 1.5xl:ml-32 xl:ml-32 lg:ml-8 lg:mr-10 md:mt-10 md:ml-10 md:mr-10 sm:mt-5 mob:ml-6% mob:mt-3'>
     <section className='relative grid 2xl:grid-cols-6 2xl:gap-50 xl:grid-cols-3 xl:gap-5 1.5xl:grid-cols-3 lg:grid-cols-3 lg:gap-5 md:grid-cols-2 md:gap-10 sm:grid-cols-2 sm:gap-6 mob:grid-cols-1 mob:gap-6'>


    
      <section className='relative bg-white rounded-lg  w-72 p-12 h-72 mb-2'> 
      <img src='/img/target.png' className='relative ml-18 bottom-2'/>
    <h2 className=' font-bold text-center text-3xl p-3 '>Test your skill</h2>
   
<Link href='/survey/1' onClick={handleStart}><h3 className='text-white bg-pink-600 text-xl  text-center py-4 rounded-full mt-4'>Start test</h3></Link>
      </section>
      





      <section className='relative bg-white rounded-lg  w-72 p-12 h-72 mb-2 '> 
      <img src='/img/plus.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-6'>View skill report</h2>
      <p className='relative text-center text-pink-600 font-bold mt-5'><Link href='/main/skillLevel' >View</Link></p>
            </section>


      
      <section className='relative bg-white rounded-lg  w-72 p-12 h-72 mb-2 '> 
      <img src='/img/plus.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-5'>Add Learnings</h2>
      <p className='relative text-center text-pink-600 font-bold mt-6'><Link href='/main/add/0' >View</Link></p>
      </section>

    
     





   
     

      <section className='relative bg-white rounded-lg  w-72 p-12 h-72 mb-2  '> 
      <img src='/img/profile.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-5'>View test history</h2>
      <p className='relative text-center text-pink-600 font-bold mt-6'><Link href='/main/history' >View</Link></p>
      </section>
      <section className='relative bg-white rounded-lg  w-72 p-12 h-72 mb-2  '> 
      <img src='/img/profile.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-10 '>Profile</h2>
      <p className='relative text-center text-pink-600 font-bold mt-10'><Link href='/main/profile' >View</Link></p>
      </section>
      <section className='relative bg-white rounded-lg  w-72 p-12 h-72 mb-2 '> 
      <img src='/img/profile.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-10 '>Feedback</h2>
      <Link href='/survey/1' onClick={handleStart}><h3 className='text-white bg-pink-600 text-xl  text-center py-4 rounded-full mt-4'>Submit</h3></Link>
      </section>
      </section>
      </section>

    </main>
  )
}