'use client'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import { useSession } from "next-auth/react"
import Link from 'next/link'
import getAllUsers from '@/lib/getAllUsers'
import axios from 'axios'
import { useEffect,useState } from 'react'

export default function Main() {
  
  const date = new Date();
  const {data: session, status}=useSession()
const [ids,setIds]=useState('')
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let name="User"
const currentDate = `${day}-${month}-${year}`;
useEffect(()=>{
  
const getData=async()=>{
 
  if(status=='authenticated'){
  

  const userData=await getAllUsers(session?.user?.email as string)
  
  setIds(userData._id)
}


}
getData()

console.log(name)
if (name){
  name="User"
}
},[status])


 




const handleStart=()=>{
  
  const endpoints = ['communication', 'Delivery', 'Design', 'Disscovery', 'IndustryKnwlg', 'Stakeholder', 'Vision'];
  const postData = async (endpoint:string) => {
    return axios.post(`http://localhost:3500/${endpoint}`,{
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
     
      <section className='relative top-1 bg-white  mx-16 mt-24 w-1/6  p-8 rounded-lg'> 
      <img src='/img/target.png' className='p-1 my-3.5'/>
    <h2 className='text-2xl text-left my-5 font-bold '>Test your skill level as 
a Product Manager</h2>
    <p className='mt-14 text-lg'>Fill this test now and as often 
as you see fit and see the 
changes in time</p>
    <p className='text-center text-white bg-pink-600 w-2/3 py-5 rounded-full ml-10 mt-14'><Link href='/survey/1' onClick={handleStart}>Start test</Link></p>
      </section>
     
      <section className='absolute w-64 bg-white left-96 h-56 top-96 rounded-lg ml-10 mt-3 p-8'> 
      <img src='/img/plus.png' className='relative ml-16 left-3'/>
      
      <h2 className='text-3xl my-5 font-bold text-center '>Add Learnings</h2>
      <p className='relative text-center text-pink-600 font-bold'>View</p>
            </section>

      <section className='absolute w-64 bg-white left-96 h-56 bottom-24 rounded-lg ml-10 p-8 '> 
      <img src='/img/profile.png' className='relative ml-16 left-2'/>
      
      <h2 className='text-3xl my-8 font-bold text-center '>Profile</h2>
      <p className='relative text-center text-pink-600 font-bold mt-12'>View</p>
      </section>

      <section className='absolute w-64 bg-white left-1/3 h-56 top-96 rounded-lg ml-20 mt-3 p-8'> 
      <img src='/img/plus.png' className='relative ml-16 left-3 mb-8'/>
      
      <h2 className='relative text-3xl my-8 font-bold text-center top-2 '>Your skill</h2>
      <p className='relative text-center text-pink-600 font-bold mt-12'><Link href='/main/skillLevel' >View</Link></p>
            </section>

      <section className='absolute w-64 bg-white left-1/3 h-56 bottom-24 rounded-lg ml-20 p-8 '> 
      <img src='/img/profile.png' className='relative ml-16 left-2'/>
      
      <h2 className='text-3xl my-8 font-bold text-center '>Test history</h2>
      <p className='relative text-center text-pink-600 font-bold mt-12'><Link href='/main/history' >View</Link></p>
      </section>
     
    </main>
  )
}
