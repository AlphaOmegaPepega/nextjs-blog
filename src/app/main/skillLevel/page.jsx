'use client'

import Chart from 'chart.js/auto'
import React, { useEffect,useState,useRef} from 'react'
import { useSession } from "next-auth/react"
import jsPDF from 'jspdf';
import getPersonal from '@/lib/getQuestions'
import getAllUsers from '@/lib/getAllUsers'
import { titles1, titles2, titles3, titles4, titles5, titles6, titles7} from '@/lib/titles'
import getDelivery from '@/lib/getDelivery'
import getDesign from '@/lib/getDesgin'
import getDiscovery from '@/lib/getDiscovery'
import getKnowleadge from '@/lib/getIndustryKnowleadge'
import getStackholder from '@/lib/getStackholder'
import getVision from '@/lib/getVision'
import createChart from '@/lib/createChart'
export default function Skill() {




const [page,SetPage]=useState(true)
  const {data: session, status}=useSession()
 
 useEffect(()=>{
  if(status=="authenticated")
  {
    if(Chart.getChart("acquisitions")){
      Chart.getChart("acquisitions").destroy()
      }
    if(Chart.getChart("acquisitions2")){
      Chart.getChart("acquisitions2").destroy()
      }
    if(Chart.getChart("acquisitions3")){
        Chart.getChart("acquisitions3").destroy()
      }
    if(Chart.getChart("acquisitions4")){
        Chart.getChart("acquisitions4").destroy()
      }
  
    const creatGraph=async ()=>{
      const user=await getAllUsers(session.user.email)
      const data=await getPersonal(user._id)
      const delivData=await getDelivery(user._id)
      const designData=await getDesign(user._id)
      const discoverData=await getDiscovery(user._id)
      const industryData=await getKnowleadge(user._id)
      const StackhData=await getStackholder(user._id)
      const VisionData=await getVision(user._id)

      const dataWorking=await data[data.length-1];
      const deliv=await delivData[delivData.length-1]
      const design=await designData[designData.length-1]   
      const discover=await discoverData[discoverData.length-1]
      const industry=await industryData[industryData.length-1]      
      const stack=await StackhData[StackhData.length-1];
      const vision=await VisionData[VisionData.length-1];
      const promises = [
        ...Object.values(dataWorking),
        ...Object.values(deliv),
        ...Object.values(design),
        ...Object.values(discover),
        ...Object.values(industry),
        ...Object.values(stack),
        ...Object.values(vision)
      ];
      const results = await Promise.all(promises);
      results.forEach(data => {
        if (data === "") {
          SetPage(false);
        }
      });



      
// Data for first part of the chart TODO:create env for it      
const chartData1=[dataWorking.Collaboration,dataWorking.Communication,
dataWorking.Quality,dataWorking.DecisionMaking,dataWorking.Learning,dataWorking.Organisational,
dataWorking.Bias]
const chartData2=[discover.UserResearch,discover.Design,discover.Market,discover.Synthesising,design.Product,design.Visual,design.UXDesign,design.UXTesting]
// Colors for first part of the chart 
const chartData3=[deliv.Business,deliv.Product,deliv.Technology,deliv.Agile,stack.Engagement,stack.Leadership,stack.Management]

const chartData4=[vision.Vision,vision.Strategy,vision.RoadMapping,industry.General,industry.Specific]

// Data for second part of the chart TODO:create env for it

// Colors for seconds part of the chart 
 
let colors=['#FF508C','#FF508C','#FF508C','#FF508C',
            '#6500D3','#6500D3','#6500D3','#6500D3']
     
      
      
      
        if(page){
        createChart('bar',titles1,chartData1,'#49BBFF','acquisitions','y')
        createChart('bar',titles2,chartData2,colors,'acquisitions2','y') 
        createChart('bar',titles3,chartData3,'#6500D3','acquisitions3','y')  
        createChart('bar',titles4,chartData4,'#F4D801','acquisitions4','y')
        


    }
  }


  
  creatGraph()
}
 },[status,page])





  return (
    <main className='cas'>


{page && <div>
  <h1>Your skill</h1>
<h3>HELLO BLA BLA BLA</h3>
<section className=''>
  <canvas  className='relative bg-white top-10 w-full' id="acquisitions" ></canvas>
  <section className='flex flex-row text-center  p-5 text-3xl relative top-10 pl-40% bg-white'>
  <h1 className='p-1 text-discovery'>Discovery</h1>
  <h1 className='p-1'>and</h1>
  <h1 className='p-1 text-design'>Design</h1>
  </section>
<canvas className='relative bg-white top-10 w-full' id="acquisitions2" ></canvas>
  <canvas  className='relative bg-white top-10 w-full' id="acquisitions3" ></canvas>
  
<canvas className='relative bg-white top-10 w-full' id="acquisitions4" ></canvas>



</section>
</div>


}
{!page && <div>
  <h1 className='text-white text-7xl text-center top-60 relative'>You have not finished survey yet</h1>
  <br/>
  

</div>


}


    </main>
  )
}
