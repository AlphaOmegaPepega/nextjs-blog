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



export default function Survey({params:{survey}}) {
  const {data: session, status}=useSession()
  
  const value=useRef([])
  const router = useRouter()
let fill




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

 


const handleSurvey=()=>{

let score=value.current.reduce((a,b)=>{return parseInt(a)+parseInt(b)})
console.log(score)

let finalscore=Math.round(score*100/(content.length*5))

console.log(finalscore)
console.log(value)

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
    <main>
      <Suspense>
      {parseInt(survey)<17 &&   <h1 className='text-5xl text-white mt-10 text-center'>{titlesCom[parseInt(survey)]}</h1>}
      {parseInt(survey)>=16 &&   <h1 className='text-5xl text-white m-5 mb-0'>{titles2[parseInt(survey)-16]}</h1>}
      <h2 className='text-3xl text-white m-5 mt-10 mb-0' >{discription[parseInt(survey)]}</h2>
     
    <div className='relative  top-8 bg-white p-12 text-left '>
    
    {content.map(question=>{
       
        id=parseInt(id)+1
      
        return (
            <label key={newID+id} className="container"><p key={newID+id+'3'} className='ml-5 '>{question}</p>
         <br/>
         <FormControl className='relative left-5 -mt-5'>
      
      <RadioGroup
      row
        aria-labelledby="demo-radio-buttons-group-label"
       
        name="radio-buttons-group"
       
      >
        <FormControlLabel className='ml-8 p-6 '  value="1" control={<Radio onChange={handleChange}  id={id+'5'} className={color[id-1]==1? "text-sky-600" :""}/>} label="Strongly Disagree" />
        <FormControlLabel className='ml-8 p-6'  value="2" control={<Radio onChange={handleChange}  id={id+'6'}className={color[id-1]==2? "text-sky-600" :""}  />} label="Disagree" />
        <FormControlLabel className='ml-8 p-6'  value="3" control={<Radio onChange={handleChange} id={id+'7'}className={color[id-1]==3? "text-sky-600" :""}  />} label="Neutral" />
        <FormControlLabel  className='ml-8 p-6' value="4" control={<Radio onChange={handleChange} id={id+'8'} className={color[id-1]==4? "text-sky-600" :""} />} label="Agree" />
        <FormControlLabel className='ml-8 p-6'  value="5" control={<Radio onChange={handleChange} id={id+'9'} className={color[id-1]==5? "text-sky-600" :""}  />} label="Strongly Agree" />
      </RadioGroup>
    </FormControl>
    <hr className='border-4'/>
          </label>
         
            )
    })
    
    }
    <p className='bg-cyan-500 p-5 w-40 mt-5 rounded-3xl text-center cursor-pointer' onClick={handleSurvey}>Next</p>
    
    </div>
    </Suspense>
    </main>
  )
}
