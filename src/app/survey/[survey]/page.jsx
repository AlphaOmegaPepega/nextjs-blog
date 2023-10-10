'use client'
import React, { Suspense, useEffect,useRef,useState } from 'react'
import { questions } from '@/lib/servey'
import "./style.css"
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import getAllUsers from '@/lib/getAllUsers'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import postQuestion from '@/lib/postQuestion'
import { titles2, titlesCom,discription } from '@/lib/titles'
import fillSurvey from '@/lib/fillSurvery'
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import axios from 'axios'

export default function Survey({params:{survey}}) {
  const {data: session, status}=useSession()

  const value=useRef([])
  const router = useRouter()
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [noteText,setNoteText]=useState('')
  //const [titleText,setTitleText]=useState('')
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);





const handleClose = async() => {
  const user=await getAllUsers(session.user.email)
  const notes=await axios.get(`https://produktize-api.onrender.com/notes/${user._id}`)
  
  console.log(notes.data)
  console.log(survey)
  if(survey<8)
  {
    let note=notes.data.PersonalNotes
    note.push(noteText)
  axios.patch(`https://produktize-api.onrender.com/notes`,{
   user:user._id,
   PersonalNotes:note,

  })
}
  if(survey>7 && survey<12)
  {
    let note=notes.data.DiscoveryNotes
    note.push(noteText)
  axios.patch(`https://produktize-api.onrender.com/notes`,{
   user:user._id,
   DiscoveryNotes:note,

  })
}
  if(survey>11 && survey<16)
  {
    let note=notes.data.DesignNotes
    note.push(noteText)
  axios.patch(`https://produktize-api.onrender.com/notes`,{
   user:user._id,
   DesignNotes:note,

  })
}
  if(survey>15 && survey<20)
  {
    let note=notes.data.DeliveryNotes
    note.push(noteText)
  axios.patch(`https://produktize-api.onrender.com/notes`,{
   user:user._id,
   DeliveryNotes:note,

  })
}
  if(survey>19 && survey<23)
  {
    let note=notes.data.StackholderNotes
    note.push(noteText)
  axios.patch(`https://produktize-api.onrender.com/notes`,{
   user:user._id,
   StackholderNotes:note,

  })
}
  if(survey>22 && survey<26)
  {
    let note=notes.data.VisionNotes
    note.push(noteText)
  axios.patch(`https://produktize-api.onrender.com/notes`,{
   user:user._id,
   VisionNotes:note,

  })
}
  if(survey>25 && survey<28)
  {
    let note=notes.data.IndustryKnwlgNotes
    note.push(noteText)
  axios.patch(`https://produktize-api.onrender.com/notes`,{
   user:user._id,
   IndustryKnwlgNotes:note,

  })
}
  setNoteText('')
  setOpen(false);
}





  const [ids,setIDs]=useState('')
  const [color,setColor]=useState([])
 

  
    let id="0"
    let newID='434'
const content=questions[survey]
let user
// TODO: Create a fanction to fill survery

useEffect(()=>{

  if(status=='authenticated'){
    const getData=async ()=>{
      user=await getAllUsers(session.user.email)
      setIDs(user._id)
      let surv=await fillSurvey(survey,user._id)
    
      setColor(surv)
      
    
     
    
     
     
     
      
  }
  getData()
}


},[status])







const handleChange=(e)=>{
 if(e.target.id.length==2){
  const questionIndex = e.target.id[0]-1;
  
  value.current[questionIndex] = e.target.value;
  
 }
 if(e.target.id.length==3){
  const questionIndex = (e.target.id[0]+e.target.id[1])-1;
  value.current[questionIndex] = e.target.value;
  
 }
 console.log(value.current)
 
 
 }

 
 const handleNoteChange=(e)=>{
  setNoteText(e.target.value)

}
//const handleTitleChange=(e)=>{
 // setTitleText(e.target.value)

//}

const handleSurvey=()=>{

let score=value.current.reduce((a,b)=>{return parseInt(a)+parseInt(b)})
console.log(score)

let finalscore=Math.round(score*100/(content.length*4))

console.log(finalscore)
console.log(value)
if(finalscore=="0"){
  finalscore="1"
}
postQuestion(ids,survey,finalscore,value.current)
if(value.current.length==content.length && parseInt(survey)<27){
router.push(`/survey/${parseInt(survey)+1}`)
}else if(parseInt(survey)==27){
  router.push(`/main`)
  alert('Thanks for finishing servey, now you can check results in my skill tab')
}else
{
  alert('You need to answer all questions')
}
}



  return (
    <main className='relative top-16'>
      <Suspense>
      <h1 className='text-5xl text-white mt-10 text-center'>{titlesCom[parseInt(survey)]}</h1>
     
      <h2 className='text-3xl text-white m-5 mt-10 mb-0' >{discription[parseInt(survey)]}</h2>
     
    <div className='relative  top-8 bg-white p-12 text-left '>
    
    {content.map(question=>{
       
        id=parseInt(id)+1
      
        return (
          <div key={newID+id+87} className='pl-32'> 
            <label key={newID+id} className="container"><p key={newID+id+'3'} className='ml-5 '>{question}</p>
         <br/>
        
         <FormControl className='relative left-5 -mt-5'>
      
      <RadioGroup
      row
        aria-labelledby="demo-radio-buttons-group-label"
       
        name="radio-buttons-group"
       
      >
        <FormControlLabel className='ml-8 p-6 '  value="0" control={<Radio onChange={handleChange}  id={id+'5'} className={color[id-1]==0? "text-sky-600" :""}/>} label="No experience" />
        <FormControlLabel className='ml-8 p-6 '  value="1" control={<Radio onChange={handleChange}  id={id+'6'} className={color[id-1]==1? "text-sky-600" :""}/>} label="Strongly Disagree" />
        <FormControlLabel className='ml-8 p-6'  value="2" control={<Radio onChange={handleChange}  id={id+'7'}className={color[id-1]==2? "text-sky-600" :""}  />} label="Disagree" />
        <FormControlLabel  className='ml-8 p-6' value="3" control={<Radio onChange={handleChange} id={id+'8'} className={color[id-1]==4? "text-sky-600" :""} />} label="Agree" />
        <FormControlLabel className='ml-8 p-6'  value="4" control={<Radio onChange={handleChange} id={id+'9'} className={color[id-1]==5? "text-sky-600" :""}  />} label="Strongly Agree" />
      </RadioGroup>
    </FormControl>
   
    <hr className='border-4'/>
          </label>
         </div>
            )
    })
    
    }

<div className='flex justify-between'>
      <p className=' p-5 relative left-40 w-40 mt-5 rounded-full text-center cursor-pointer bg-pink-700 text-white ' onClick={handleOpen}>Add note</p>
      <Modal
        open={open}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box
        className='py-5'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%',fontSize:24 },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='w-full mt-5'>
        <TextField
          id="outlined-multiline-flexible"
          label="Text of the note"
          inputProps={{style: {fontSize: 18,}}} // font size of input text
          multiline
          rows={16}
          value={noteText}
          onChange={handleNoteChange}
        />
        </div>
        <p className='text-center cursor-pointer p-4 text-lg bg-pink-700 rounded-full text-white' onClick={handleClose}>Save</p>
        </Box>
        </Box>
      </Modal>
      <p className=' p-5 w-40 mt-5 rounded-full text-center cursor-pointer relative right-35 text-white bg-pink-700' onClick={handleSurvey}>Next</p>
    </div>



    
    
    </div>
    </Suspense>
    </main>
  )
}
