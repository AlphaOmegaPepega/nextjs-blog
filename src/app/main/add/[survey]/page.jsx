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
import "./style.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Add({params:{survey}}) {
  const {data: session, status}=useSession()
 
  const [expanded, setExpanded] = useState(false);

  const value=useRef([])
  const router = useRouter()
let fill




  const [ids,setIDs]=useState('')
  const [color,setColor]=useState([])
 

  
    let id="0"
    let newID='434'
const content=questions[parseInt(survey)]
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

const handleChoice=(e)=>{
 router.push(`/main/add/${e.target.id}`)
  

}


const handlePanel = (panel) => (event,isExpanded) => {
setExpanded(isExpanded ? panel : false);
};





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
    <main className='relative'>
      <h1 className='text-5xl text-white mt-3% text-center'>{titlesCom[parseInt(survey)]}</h1>
      <section className='grid grid-cols-5 mt-2% bg-white'>
      <section className='flex flex-col relative'>
        <section className='mt-36% sticky top-36%'>
      <Accordion expanded={expanded === 'panel1'} onChange={handlePanel('panel1')}>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>PERSONAL</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='1' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Collaboration</p>
       
         <p id='2' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Communication</p>
        
         <p id="3" className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Quality</p>
        
         <p id="4" className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Decision making</p>
        
         <p id='5' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Continuous learning</p>
         
         <p id='6' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Organizational skills</p>
        
         <p id='7' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Bias to Action</p>
        </AccordionDetails>
      </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handlePanel('panel2')}>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>DISCOVERY</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='8' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>User Research</p>
         <p id='9' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Design thinking</p>
         <p id='10' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Market Research</p>
         <p id='11' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Synthesising findings</p>
        </AccordionDetails>
      </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handlePanel('panel3')}>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>DESIGN</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='12' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Product thinking</p>
         <p id='13' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Visual Design</p>
         <p id='14' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>UX & Interaction design</p>
         <p id='15' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>UX testing</p>
        </AccordionDetails>
      </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handlePanel('panel5')}>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>DELIVERY</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='16' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Business Process Management</p>
         <p id='17' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Product Development</p>
         <p id='18' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Technology Awareness</p>
         <p id='19' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Agile Product Delivery</p>
        </AccordionDetails>
      </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={handlePanel('panel6')}>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>STAKEHOLDER MANAGEMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='20' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Engagement</p>
         <p id='21' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Leadership</p>
         <p id='22' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Stakeholder Management</p>
        </AccordionDetails>
      </Accordion>
        <Accordion expanded={expanded === 'panel7'} onChange={handlePanel('panel7')}>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>VISION AND STRATEGY</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='23' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Vision</p>
         <p id='24' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Road Mapping</p>
         <p id='25' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Strategy</p>
        </AccordionDetails>
      </Accordion>
        <Accordion expanded={expanded === 'panel8'} onChange={handlePanel('panel8')}>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>BUSINESS INDUSTRY KNOWLEDGE</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='26' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>General Knowledge</p>
         <p id='27' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChoice}>Specific Processes</p>
         
        </AccordionDetails>
      </Accordion>
      </section>
      </section>
      <Suspense>
        <section className='col-span-4 relative'>
      
     
     
    <div className='relative    p-5 text-left '>
    
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
        <FormControlLabel  className='ml-8 p-6' value="3" control={<Radio onChange={handleChange} id={id+'8'} className={color[id-1]==4? "text-sky-600" :""} />} label="Agree" />
        <FormControlLabel className='ml-8 p-6'  value="4" control={<Radio onChange={handleChange} id={id+'9'} className={color[id-1]==5? "text-sky-600" :""}  />} label="Strongly Agree" />
      </RadioGroup>
    </FormControl>
    <hr className='border-4'/>
          </label>
         
            )
    })
    
    }
    <p className='bg-cyan-500 p-5 w-40 mt-1% ml-2% rounded-3xl text-center cursor-pointer' onClick={handleSurvey}>Next</p>
    
    </div>
    </section>
    </Suspense>
   
    </section>
    </main>
  )
}
