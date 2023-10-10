'use client'
import getAllUsers from '@/lib/getAllUsers';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useSession } from "next-auth/react"
import React, { Suspense, useEffect,useRef,useState } from 'react'
function page() {
    const [noteText,setNoteText]=useState('')
    const [titleText,setTitleText]=useState('')
    const {data: session, status}=useSession()
    const handleChange=(e)=>{
        setNoteText(e.target.value)
     
    }
    const handleTitleChange=(e)=>{
        setTitleText(e.target.value)
     
    }
    
    const handleSave=async ()=>{
        const user=await getAllUsers(session.user.email)
        const notes=await axios.get(`https://produktize-api.onrender.com/notes/${user._id}`)
        console.log(notes.data)
       let note=notes.data[0].notes
        note.push(noteText)
       let title=notes.data[0].titles
        title.push(titleText)
      
     
        
      axios.patch(`https://produktize-api.onrender.com/notes`,{
      user:user._id,
      notes:note,
     titles:title
    })
    }



  return (
    <main   className='bg-white text-2xl text-center'>
    <Box
        className='py-5'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80%',fontSize:24 },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
         <TextField id="outlined-basic"
          inputProps={{style: {fontSize: 24}}} // font size of input text      
          onChange={handleTitleChange}
         label="Title" variant="outlined" />
         </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Text of the note"
          inputProps={{style: {fontSize: 18}}} // font size of input text
          multiline
          rows={16}
          value={noteText}
          onChange={handleChange}
        />
        </div>
    </Box>
    <section className='pt-10 pb-14'>
<b className='cursor-pointer text-2xl p-5 bg-slate-400 rounded-full px-24' onClick={handleSave} >Save</b>

    </section>
    </main>
    
  )
}

export default page