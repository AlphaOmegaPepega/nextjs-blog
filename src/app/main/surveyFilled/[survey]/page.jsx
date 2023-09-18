'use client'
import React, { Suspense, useEffect,useRef,useState } from 'react'
import { questions } from '@/lib/servey'

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
  
  
  const router = useRouter()




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
     
      let surv=await fillSurvey(survey,user._id)
    
      setColor(surv)
      
      
    
     
    
     
     
     
      
  }
  getData()
}


},[status])









 


const handleSurvey=()=>{
    router.push(`/main/surveyFilled//${parseInt(survey)+1}`)
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
        value={color.length? color[id-1] : '3'}
        name="radio-buttons-group"
        
       
      >
        <FormControlLabel className='ml-8 p-6 '  value="1" control={<Radio   id={id+'5'} />} label="Strongly Disagree" />
        <FormControlLabel className='ml-8 p-6'  value="2" control={<Radio  id={id+'6'} />} label="Disagree" />
        <FormControlLabel className='ml-8 p-6'  value="3" control={<Radio  id={id+'7'} />} label="Neutral" />
        <FormControlLabel  className='ml-8 p-6' value="4" control={<Radio  id={id+'8'}  />} label="Agree" />
        <FormControlLabel className='ml-8 p-6'  value="5" control={<Radio  id={id+'9'} />} label="Strongly Agree" />
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
