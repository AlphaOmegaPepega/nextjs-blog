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
    const [expanded, setExpanded] = useState(false);
    const handleChoice=(e)=>{
        setSelect(e.target.id)
        
      
    }


    const handleChange = (panel) => (isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

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
                    createChart('bar',lables,dataChart,'#49BBFF',"acquisitions",'x')
                  
              
                  }
                  creatGraph()


        }
    },[status,select])
  return (
    <main className='relative top-20'>
        <section className='flex bg-white p-2%'>
        <section className='bg-white  flex-none w-64 relative -top-7 py-2%' >
        

        
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
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
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
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
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
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
        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
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
        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
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
<section className='bg-white flex-1 ml-1% rounded-2xl h-200'>
    
    <canvas className='h-max'  id="acquisitions" ></canvas></section>
</section>
</main>
  )
}
