'use client'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto'
import { useSession } from "next-auth/react"
import getAllUsers from '@/lib/getAllUsers';
import getDesgin from '@/lib/getDesgin'
export default function Personal() {
    const {data: session, status}=useSession()
    const [select,setSelect]=useState(0)
    const handleChange=(e)=>{
        setSelect(e.target.value)
      
    }
    useEffect(()=>{
        if(status=='authenticated'){
            if(Chart.getChart("acquisitions")){
                Chart.getChart("acquisitions").destroy()
                }
                const creatGraph=async ()=>{
                    const user=await getAllUsers(session.user.email)
                    const data=await getDesgin(user._id)
                    console.log(data)
                 
                 
                   
                    
                    let newData
                    let time
                    if(select==0){
                        newData=[]
                        time=[]
                        
                        data.map(collab=>{
                            if(collab.Product){
                                
                            newData.push(collab.Product)
                            time.push(collab.date)
                            }
                        })
                    }
                    if(select==1){
                        newData=[]
                        time=[]
                        data.map(collab=>{
                            if(collab.Visual){
                            newData.push(collab.Visual)
                            time.push(collab.date)
                            }
                        })
                    }
                    if(select==2){
                        newData=[]
                        time=[]
                        data.map(collab=>{
                            if(collab.UXDesign){
                            newData.push(collab.UXDesign)
                            time.push(collab.date)
                            }
                        })
                    }
                    if(select==3){
                        newData=[]
                        time=[]
                        data.map(collab=>{
                            if(collab.UXTesting){
                            newData.push(collab.UXTesting)
                            time.push(collab.date)
                            }
                        })
                    }
                   
                    
                    
                      
                      
                    
                      new Chart(
                        document.getElementById('acquisitions'),
                        {
                          type: 'bar',
                          data: {
                            labels: time,
                            datasets: [
                              {
                                label: 'Score',
                                data: newData,
                                backgroundColor:'#427982'
                              }
                            ],
                            
                            
                          },
                          options: {
                            indexAxis: 'x',
                            scales: {
                              y: {
                                  suggestedMin: 0,
                                  suggestedMax: 100
                              }
                            },
                            plugins: {
                                legend: {
                                    display:false
                                }
                            }
                        }
                        
                        }
                      );
                   
              
              
                  }
                  creatGraph()


        }
    },[status,select])
  return (
    <main >
        <div className='relative top-16 mar w-1/4 m-auto p-8 bg-white'>
        <Box sx={{ maxWidth: 400 }}>
    <FormControl fullWidth variant="filled" >
  <InputLabel id="demo-simple-select-filled-label">Personal</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={select}
    label="Personal"
    onChange={handleChange}
  >
    <MenuItem value={0}>Product thinking</MenuItem>
    <MenuItem value={1}>Visual Design</MenuItem>
    <MenuItem value={2}>UX & Interaction desig</MenuItem>
    <MenuItem value={3}>UX testing</MenuItem>
    
  </Select>
</FormControl>
</Box>
</div>
<div className='bg-white w-8/12 relative top-20 left-72'><canvas  id="acquisitions" ></canvas></div>
</main>
  )
}
