'use client'
import React from 'react'
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
const [name,setName]=useState('User')
const currentDate = `${day}-${month}-${year}`;
useEffect(()=>{
  
const getData=async()=>{
 
  if(status=='authenticated'){
  

  const userData=await getAllUsers(session?.user?.email)
  if(!userData){
    axios.post(`https://produktize-api.onrender.com/users`,{
      email:session?.user?.email,
      date:currentDate
    })
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

}
  return (
    <main>
      <h1 className='text-white text-7xl w-2/5 mx-20 mt-20 '> Welcome,</h1>
      <h1 className='text-white text-7xl w-2/5 mx-20 mt-2'>{name}</h1>


     <section className='relative lg:grid lg:grid-cols-4 w-8/12 lg:mx-20 md:mx-2 my-20 sm:justify-center '>


      <section className='lg:col-span-2 mb-6.5'>
      <section className='w-80 lg:h-100 sm:h-96 relative  bg-white  p-8 rounded-lg '> 
      <img src='/img/target.png' className='p-1 my-3.5'/>
    <h2 className='text-2xl text-left my-5 font-bold '>Test your skill level as 
a Product Manager</h2>
    <p className='mt-14 lg:text-lg md:text-base'>Fill this test now and as often 
as you see fit and see the 
changes in time</p>
<Link href='/survey/1' onClick={handleStart}><h3 className='text-white bg-pink-600 text-xl  text-center py-5 rounded-full mt-14'>Start test</h3></Link>
      </section>
      </section>








      <section className='relative lg:right-72 '>
      <section className='relative bg-white rounded-lg  w-64 p-8 h-56 '> 
      <img src='/img/plus.png' className=' ml-18'/>
      
      <h2 className=' font-bold text-center text-3xl p-3 '>Add Learnings</h2>
      <p className='relative text-center text-pink-600 font-bold text-lg top-3'><Link href='/main/add/1' >View</Link></p>
      </section>

      <section className=' bg-white rounded-lg  w-64 p-8 h-56 my-6.5 '> 
      <img src='/img/profile.png' className=' ml-18'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-8 '>Profile</h2>
      <p className='relative text-center text-pink-600 font-bold mt-7'><Link href='/main/profile' >View</Link></p>
      </section>
      </section>





      <section className='relative lg:right-80 '>
      <section className=' bg-white rounded-lg  w-64 p-8 h-56'> 
      <img src='/img/plus.png' className=' ml-18'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-8'>Your skill</h2>
      <p className='relative text-center text-pink-600 font-bold mt-7'><Link href='/main/skillLevel' >View</Link></p>
            </section>

      <section className=' bg-white rounded-lg  w-64 p-8 h-56 my-6.5 '> 
      <img src='/img/profile.png' className=' ml-18'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-8'>Test history</h2>
      <p className='relative text-center text-pink-600 font-bold mt-7'><Link href='/main/history' >View</Link></p>
      </section>
      </section>
      </section>
    </main>
  )
}