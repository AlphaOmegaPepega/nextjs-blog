'use client'

import Chart from 'chart.js/auto'
import React, { useEffect,useState,useRef} from 'react'
import { useSession } from "next-auth/react"
import jsPDF from 'jspdf';
import getPersonal from '@/lib/getQuestions'
import getAllUsers from '@/lib/getAllUsers'
import { titles1, titles2} from '@/lib/titles'
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
dataWorking.Bias,
discover.UserResearch,discover.Design,discover.Market,discover.Synthesising,
design.Product,design.Visual,design.UXDesign,design.UXTesting]
// Colors for first part of the chart 
const chartColors1=['#49BBFF','#49BBFF','#49BBFF','#49BBFF','#49BBFF','#49BBFF','#49BBFF',
'#FF508C','#FF508C','#FF508C','#FF508C',
'#6500D3','#6500D3','#6500D3','#6500D3']

// Data for second part of the chart TODO:create env for it
const chartData2=[deliv.Business,deliv.Product,deliv.Technology,deliv.Agile,
  stack.Engagement,stack.Leadership,stack.Management,
  vision.Vision,vision.Strategy,vision.RoadMapping,
  industry.General,industry.Specific]

// Colors for seconds part of the chart 
  const chartColors2=['#F4D801','#F4D801','#F4D801','#F4D801',
  '#00268B','#00268B','#00268B',
  '#FFD79A','#FFD79A','#FFD79A',
  '#E7DCF8','#E7DCF8']

     
      
      
      
        if(page){
        createChart('bar',titles1,chartData1,chartColors1,'acquisitions','y')
        createChart('bar',titles2,chartData2,chartColors2,'acquisitions2','y')  


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

  <canvas  className='relative bg-white top-10 w-full' id="acquisitions" ></canvas>
  
<canvas className='relative bg-white top-10 w-full' id="acquisitions2" ></canvas>



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
