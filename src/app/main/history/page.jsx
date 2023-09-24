'use client'

import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { useSession } from "next-auth/react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import createChart from '@/lib/createChart';
import getAllUsers from '@/lib/getAllUsers';
import getHistory from '@/lib/getHistory'
import Divider from '@mui/material/Divider';




export default function Personal() {
    const {data: session, status}=useSession()
    const [select,setSelect]=useState(1)
    const [user,setUser]=useState('')
   
    const handleChange=(e)=>{
        setSelect(e.target.id)
        
      
    }
    useEffect(()=>{
        if(status=='authenticated'){
          let dataChart=[]
          let lables=[]
            if(Chart.getChart("acquisitions")){
                Chart.getChart("acquisitions").destroy()
                }
                const creatGraph=async ()=>{
                  let data=await getAllUsers(session.user.email)
                  setUser(data._id)
                  console.log(select,"   ",data._id)
                  let fill= await getHistory(select,data._id)
                  if(fill){
                    fill.map(fill=>{
                      dataChart.push(fill[0])
                     
                      lables.push(fill[1])
                      
                    })
                  }
                
                  console.log(dataChart)
                  console.log(lables)
                    createChart('bar',lables,dataChart,'#A52A2A',"acquisitions",'x')
                  
              
                  }
                  creatGraph()


        }
    },[status,select])
  return (
    <main>
        <section className='flex'>
        <section className='bg-white flex-none w-64 relative pt-28' >
        

        
        <Accordion>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>PERSONAL</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='1' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Collaboration</p>
         <Divider />
         <p id='2' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Communication</p>
         <Divider/>
         <p id="3" className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Quality</p>
         <Divider />
         <p id="4" className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Decision making</p>
         <Divider />
         <p id='5' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Continuous learning</p>
         <Divider />
         <p id='6' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Organizational skills</p>
         <Divider />
         <p id='7' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Bias to Action</p>
        </AccordionDetails>
      </Accordion>
        <Accordion>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>DISCOVERY</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='8' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>User Research</p>
         <p id='9' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Design thinking</p>
         <p id='10' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Market Research</p>
         <p id='11' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Synthesising findings</p>
        </AccordionDetails>
      </Accordion>
        <Accordion>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>DESIGN</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='12' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Product thinking</p>
         <p id='13' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Visual Design</p>
         <p id='14' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>UX & Interaction design</p>
         <p id='15' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>UX testing</p>
        </AccordionDetails>
      </Accordion>
        <Accordion>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>DELIVERY</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='16' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Business Process Management</p>
         <p id='17' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Product Development</p>
         <p id='18' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Technology Awareness</p>
         <p id='19' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Agile Product Delivery</p>
        </AccordionDetails>
      </Accordion>
        <Accordion>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>STAKEHOLDER MANAGEMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='20' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Engagement</p>
         <p id='21' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Leadership</p>
         <p id='22' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Stakeholder Management</p>
        </AccordionDetails>
      </Accordion>
        <Accordion>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>VISION AND STRATEGY</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='23' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Vision</p>
         <p id='24' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Road Mapping</p>
         <p id='25' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Strategy</p>
        </AccordionDetails>
      </Accordion>
        <Accordion>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>BUSINESS INDUSTRY KNOWLEDGE</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <p id='26' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>General Knowledge</p>
         <p id='27' className='text-xl cursor-pointer hover:text-black/70' onClick={handleChange}>Specific Processes</p>
         
        </AccordionDetails>
      </Accordion>
       


</section>
<section className='bg-white flex-1'>
    
    <canvas  id="acquisitions" ></canvas></section>
</section>
</main>
  )
}
