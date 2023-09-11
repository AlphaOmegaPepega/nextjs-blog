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
import getPersonal from '@/lib/getQuestions';
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
                    const data=await getPersonal(user._id)
                 
                    let colors=[]
                    data.map(color=>{
                    colors.push(`rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.8)`)
                    })
                    let newData
                    let time
                    if(select==0){
                        newData=[]
                        time=[]
                        
                        data.map(collab=>{
                            if(collab.Collaboration !=''){
                            newData.push(collab.Collaboration)
                            time.push(collab.date)
                            }
                        })
                    }
                    if(select==1){
                        newData=[]
                        time=[]
                        data.map(collab=>{
                            if(collab.Communication !=''){
                            newData.push(collab.Communication)
                            time.push(collab.date)
                            }
                        })
                    }
                    if(select==2){
                        newData=[]
                        time=[]
                        data.map(collab=>{
                            if(collab.Quality !=''){
                            newData.push(collab.Quality)
                            time.push(collab.date)
                            }
                        })
                    }
                    if(select==3){
                        newData=[]
                        time=[]
                        data.map(collab=>{
                            if(collab.DecisionMaking !=''){
                            newData.push(collab.DecisionMaking)
                            time.push(collab.date)
                            }
                        })
                    }
                    if(select==4){
                        newData=[]
                        time=[]
                        data.map(collab=>{
                            if(collab.Learning !=''){
                            newData.push(collab.Learning)
                            time.push(collab.date)
                            }
                        })
                    }
                    if(select==5){
                        newData=[]
                        time=[]
                        data.map(collab=>{
                            if(collab.Organisational !=''){
                            newData.push(collab.Organisational)
                            time.push(collab.date)
                            }
                        })
                    }
                  
                    if(select==6){
                        newData=[]
                        time=[]
                        data.map(collab=>{
                            if(collab.Bias !=''){
                            newData.push(collab.Bias)
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
                                backgroundColor: colors
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
                                    labels: {
                                        // This more specific font property overrides the global property
                                        font: {
                                            size: 16
                                        }
                                    }
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
    <MenuItem value={0}>Collaboration</MenuItem>
    <MenuItem value={1}>Communication</MenuItem>
    <MenuItem value={2}>Quality</MenuItem>
    <MenuItem value={3}>DecisionMaking</MenuItem>
    <MenuItem value={4}>Learning</MenuItem>
    <MenuItem value={5}>Organisational</MenuItem>
    <MenuItem value={6}>Bias</MenuItem>
  </Select>
</FormControl>
</Box>
</div>
<div className='bg-white w-8/12 relative top-20 left-72'><canvas  id="acquisitions" ></canvas></div>
</main>
  )
}
