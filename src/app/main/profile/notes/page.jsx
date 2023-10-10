'use client'
import Link from 'next/link'
import React, { Suspense, useEffect,useRef,useState } from 'react'
import { useSession } from "next-auth/react"
import getAllUsers from '@/lib/getAllUsers'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios'
function Notes() {
  const {data: session, status}=useSession()
  const [title,setTitle]=useState([])
  const [note,setNote]=useState([])
  let id=-1
useEffect(()=>{
  if(status=='authenticated'){
  const getData=async()=>{
  const user=await getAllUsers(session.user.email)
  const notes=await axios.get(`https://produktize-api.onrender.com/notes/${user._id}`)
  console.log(notes.data[0].titles)
  setTitle(notes.data[0].titles)
  setNote(notes.data[0].notes)
  }
  getData()
}

},[status])
  return (
    <main>
<header className='text-center text-6xl text-white p-5'>

<h1>Notes</h1>
</header>
<section className='grid grid-cols-2'>
{title.map(titl=>{
id=id+1
  return(
<section className='text-lg p-8 m-5'>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         
        >
          <Typography
          variant="h5"
          
          >{titl}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
       {note[id]}
          </Typography>
        </AccordionDetails>
        </Accordion>
     
     
</section>
  )
  
 
})

}

</section>
<footer className='text-center p-5  my-10'>
<Link className='bg-pink-600 p-6 px-10 text-xl text-white rounded-full' href='notes/add' >Add note</Link>

</footer>



    </main>



    
  )
}

export default Notes