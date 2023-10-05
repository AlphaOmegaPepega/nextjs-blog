'use client'
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation'

function SideMenu() {
    const router = useRouter()
    const [expanded, setExpanded] = useState(false);
    
    
    const handleChoice=(e)=>{
    router.push(`/main/add/${e.target.id}`)
  

    }

    
const handlePanel = (panel) => (event,isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    };
  return (
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
  )
}

export default SideMenu