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
    <main className=''>
      <h1 className='text-white lg:text-title w-2/5 mx-24 mt-12'> Welcome</h1>
      <h1 className='text-white lg:text-title w-2/5 mx-24 relative bottom-7'>{name}</h1>


     <section className='relative lg:grid lg:grid-cols-6 mt-16 left-24'>


    
      <section className='relative bg-white rounded-lg  w-72 p-12 h-72'> 
      <img src='/img/target.png' className='relative ml-18 bottom-2'/>
    <h2 className=' font-bold text-center text-3xl p-3 '>Test your skill</h2>
   
<Link href='/survey/1' onClick={handleStart}><h3 className='text-white bg-pink-600 text-xl  text-center py-4 rounded-full mt-4'>Start test</h3></Link>
      </section>
      





      <section className='relative bg-white rounded-lg  w-72 p-12 h-72'> 
      <img src='/img/plus.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-6'>View skill report</h2>
      <p className='relative text-center text-pink-600 font-bold mt-5'><Link href='/main/skillLevel' >View</Link></p>
            </section>


      
      <section className='relative bg-white rounded-lg  w-72 p-12 h-72'> 
      <img src='/img/plus.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-5'>Add Learnings</h2>
      <p className='relative text-center text-pink-600 font-bold mt-6'><Link href='/main/add/1' >View</Link></p>
      </section>

    
     





   
     

      <section className='relative bg-white rounded-lg  w-72 p-12 h-72'> 
      <img src='/img/profile.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-5'>View test history</h2>
      <p className='relative text-center text-pink-600 font-bold mt-6'><Link href='/main/history' >View</Link></p>
      </section>
      <section className='relative bg-white rounded-lg  w-72 p-12 h-72'> 
      <img src='/img/profile.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-10 '>Profile</h2>
      <p className='relative text-center text-pink-600 font-bold mt-10'><Link href='/main/profile' >View</Link></p>
      </section>
      </section>
      

    </main>
  )
}