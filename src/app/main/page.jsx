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
      <h1 className='text-white text-title  2xl:w-2/5 2xl:mx-35 2xl:mt-12 xl:mx-24 xl:mt-12'> Welcome,</h1>
      <h1 className='text-white text-title 2xl:w-2/5 2xl:mx-35 2xl:relative 2xl:bottom-7 xl:mx-24'>{name}</h1>

<section className='2xl:ml-36 xl:ml-24 lg:ml-10'>
     <section className='relative grid 2xl:grid-cols-6 2xl:mt-16 xl:mt-12 gap-64 xl:gap-5 lg:grid-cols-3 lg:gap-28'>


    
      <section className='relative bg-white rounded-lg  w-72 p-12 h-72 mb-2'> 
      <img src='/img/target.png' className='relative ml-18 bottom-2'/>
    <h2 className=' font-bold text-center text-3xl p-3 '>Test your skill</h2>
   
<Link href='/survey/1' onClick={handleStart}><h3 className='text-white bg-pink-600 text-xl  text-center py-4 rounded-full mt-4'>Start test</h3></Link>
      </section>
      





      <section className='relative bg-white rounded-lg  w-72 p-12 h-72 mb-2'> 
      <img src='/img/plus.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-6'>View skill report</h2>
      <p className='relative text-center text-pink-600 font-bold mt-5'><Link href='/main/skillLevel' >View</Link></p>
            </section>


      
      <section className='relative bg-white rounded-lg  w-72 p-12 h-72 mb-2'> 
      <img src='/img/plus.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-5'>Add Learnings</h2>
      <p className='relative text-center text-pink-600 font-bold mt-6'><Link href='/main/add/0' >View</Link></p>
      </section>

    
     





   
     

      <section className='relative bg-white rounded-lg  w-72 p-12 h-72 mb-2 2xl:ml-0 xl:ml-52'> 
      <img src='/img/profile.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-5'>View test history</h2>
      <p className='relative text-center text-pink-600 font-bold mt-6'><Link href='/main/history' >View</Link></p>
      </section>
      <section className='relative bg-white rounded-lg  w-72 p-12 h-72 mb-2 2xl:ml-0 xl:ml-52 '> 
      <img src='/img/profile.png' className='relative ml-18 bottom-2'/>
      
      <h2 className='font-bold text-center text-3xl p-3 pt-10 '>Profile</h2>
      <p className='relative text-center text-pink-600 font-bold mt-10'><Link href='/main/profile' >View</Link></p>
      </section>
      </section>
      </section>

    </main>
  )
}