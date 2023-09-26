'use client'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import { useSession } from "next-auth/react"
import Link from 'next/link'
import getAllUsers from '@/lib/getAllUsers'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Main() {
  const router = useRouter();
  const date = new Date();
  const {data: session, status}=useSession()
const [ids,setIds]=useState('')
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
const [name,setName]=useState('User')
const currentDate = `${day}-${month}-${year}`;
useEffect(()=>{
  
const getData=async()=>{
 
  if(status=='authenticated'){
  

  const userData=await getAllUsers(session?.user?.email as string)
  if(!userData){
    axios.post(`https://produktize-api.onrender.com/users`,{
      email:session?.user?.email,
      date:currentDate
    })
    router.push('/main/profile')
  }else{
  setIds(userData._id)}
}


}
getData()


if(session?.user?.name){
  setName(session?.user?.name)
}

},[status])


 




const handleStart=async ()=>{
  
  if(!ids){
    const userData=await getAllUsers(session?.user?.email as string)
    setIds(userData._id)
  }
  const endpoints = ['communication', 'Delivery', 'Design', 'Disscovery', 'IndustryKnwlg', 'Stakeholder', 'Vision'];
  const postData = async (endpoint:string) => {
    return axios.post(`https://produktize-api.onrender.com/${endpoint}`,{
      user:ids,
      date:currentDate
    });
  }
  Promise.all(endpoints.map(endpoint => postData(endpoint)));

}
  return (
    <main>
      <h1 className='text-white text-7xl w-2/5 mx-10 mt-16'> Welcome,</h1>
      <h1 className='text-white text-7xl w-2/5 mx-10 mt-2'>{name}</h1>
     <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 w-9/12 relative mt-2% left-2%'>
      <section id='1'>

      <section className=' bg-white p-7.5% rounded-3xl w-10/12 ml-1% mt-8.2% row-span-3 space-y-18.35%'> 
      <img src='/img/target.png' className='p-1 my-4.2% scale-110'/>
    <h2 className='lg:text-3xl md:text-xl sm:text-lg text-left font-bold '>Test your skill level as 
a Product Manager</h2>
    <p className='mt-17% lg:text-2xl md:text-lg sm:text-base pb-2%'>Fill this test now and as often 
as you see fit and see the 
changes in time</p>
    <p className='text-center text-xl left-12% relative top-1 text-white w-9/12 bg-pink-600 p-5% rounded-full'><Link href='/survey/1' onClick={handleStart}>Start test</Link></p>
      </section>
      </section>

     <section id='2' className='relative -left-11%'>

      <section className='bg-white  rounded-3xl p-6.8% row-span-1 mt-8.2% w-8/12 '> 
      <img src='/img/plus.png' className='relative ml-42% scale-110'/>
      
      <h2 className='text-3xl my-13% font-bold text-center relative top-1 '>Add Learnings</h2>
      <p className='relative text-center text-xl  text-pink-600 font-bold mt-20%'><Link href='/main/add'>View</Link></p>
            </section>

      <section className=' bg-white  rounded-3xl p-6.8% row-span-1 mt-8.2% w-8/12 '> 
      <img src='/img/profile.png' className='relative ml-42% scale-110'/>
      
      <h2 className='text-3xl my-13% font-bold text-center relative top-1  '>Profile</h2>
      <p className='relative text-center text-xl  text-pink-600 font-bold mt-20%'><Link href='/main/profile'>View</Link></p>
      </section>
      </section>

      <section id='3' className='relative -left-40%'>

      <section className='bg-white  rounded-3xl p-6.8% row-span-1 mt-8.2% w-8/12 '> 
      <img src='/img/plus.png' className='relative ml-42% scale-110'/>
      
      <h2 className='text-3xl my-13% font-bold text-center relative top-1  '>Your skill</h2>
      <p className='relative text-center text-xl  text-pink-600 font-bold mt-20%'><Link href='/main/skillLevel' >View</Link></p>
            </section>

      <section className='bg-white  rounded-3xl p-6.8% row-span-1 mt-8.2% w-8/12 '> 
      <img src='/img/profile.png' className='relative ml-42% lg:scale-110 md:scale-75 sm:scale-50'/>
      
      <h2 className='text-3xl my-13% font-bold text-center relative top-1  '>Test history</h2>
      <p className='relative text-center text-xl  text-pink-600 font-bold mt-20%'><Link href='/main/history' >View</Link></p>
      </section>
      </section>
      </section>
    </main>
  )
}
