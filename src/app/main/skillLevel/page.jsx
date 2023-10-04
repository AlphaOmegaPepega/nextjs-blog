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
 let dataWorking
 let deliv
 let design
 let discover
 let industry
 let stack 
 let vision
let chartData1
let chartData2
let chartData3
let chartData4
let chartData5
let chartData6
let chartData7
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
    if(Chart.getChart("acquisitions5")){
        Chart.getChart("acquisitions5").destroy()
      }
    if(Chart.getChart("acquisitions6")){
        Chart.getChart("acquisitions6").destroy()
      }
    if(Chart.getChart("acquisitions7")){
        Chart.getChart("acquisitions7").destroy()
      }
  
    const creatGraph=async ()=>{
      try{
      const user=await getAllUsers(session.user.email)
      const data=await getPersonal(user._id)
      const delivData=await getDelivery(user._id)
      const designData=await getDesign(user._id)
      const discoverData=await getDiscovery(user._id)
      const industryData=await getKnowleadge(user._id)
      const StackhData=await getStackholder(user._id)
      const VisionData=await getVision(user._id)

      dataWorking=await data[data.length-1];
       deliv=await delivData[delivData.length-1]
       design=await designData[designData.length-1]   
       discover=await discoverData[discoverData.length-1]
       industry=await industryData[industryData.length-1]      
      stack=await StackhData[StackhData.length-1];
      vision=await VisionData[VisionData.length-1];
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
    }catch(error){
      console.log(error)
      SetPage(false);
    }


      
    
if(dataWorking){
chartData1=[dataWorking.Collaboration,dataWorking.Communication,
dataWorking.Quality,dataWorking.DecisionMaking,dataWorking.Learning,dataWorking.Organisational,
dataWorking.Bias]
}
if(discover){
chartData2=[discover.UserResearch,discover.Design,discover.Market,discover.Synthesising]
}
if(design){
chartData3=[design.Product,design.Visual,design.UXDesign,design.UXTesting]
}
if(deliv){
chartData4=[deliv.Business,deliv.Product,deliv.Technology,deliv.Agile]
}
if(stack){


chartData5=[stack.Engagement,stack.Leadership,stack.Management]
}
if(vision){
chartData6=[vision.Vision,vision.Strategy,vision.RoadMapping]
}
if(industry){
chartData7=[industry.General,industry.Specific]
}





     
      
      
      
        if(page){
        createChart('bar',titles1,chartData1,'#49BBFF99','acquisitions','y')
        createChart('bar',titles2,chartData2,'#FF508C99','acquisitions2','y') 
        createChart('bar',titles3,chartData3,'#6500D399','acquisitions3','y')  
        createChart('bar',titles4,chartData4,'#F4D80199','acquisitions4','y')
        createChart('bar',titles5,chartData5,'#00268B99','acquisitions5','y') 
        createChart('bar',titles6,chartData6,'#FFD79A99','acquisitions6','y')  
        createChart('bar',titles7,chartData7,'#E7DCF899','acquisitions7','y')
        


    }
  }


  
  creatGraph()
}
 },[status,page])





  return (
    <main className='h-full'>


{page && <div className=' w-full'>
  <h1 >Your skill</h1>
<h3>HELLO BLA BLA BLA</h3>
<section className='bg-white'>
<section className='h-145'>
<section className='text-center relative top-10 py-4 text-3xl bg-white'>
  <h1 className='bg-white'>PERSONAL TRAITS</h1>
  </section>
  <section className='text-center  text-3xl   bg-white h-145 pl-1.5 pb-14'> 
  <canvas  className='relative bg-white top-10  ' id="acquisitions" ></canvas>
  </section>

  <section className='text-center relative  text-3xl bg-white'>
  <h1 >DISCOVERY AND IDEATION</h1>
  </section>
  <section className='text-center  text-3xl   bg-white h-96 pl-15 pb-14'> 
<canvas className='relative bg-white top-10 ' id="acquisitions2" ></canvas>
</section>

<section className='text-center relative text-3xl bg-white z-50'>
  <h1 className>DESIGN</h1>
  </section>
  <section className='relative text-3xl   bg-white h-96 pl-11 pb-14'> 
  <canvas  className='relative  top-10  ' id="acquisitions3" ></canvas>
  </section>

  <section className='text-center relative text-3xl bg-white'>
  <h1 className>DELIVERY</h1>
  </section>
  <section className='text-3xl   bg-white h-96 pb-14'> 
<canvas className='relative bg-white top-10 ' id="acquisitions4" ></canvas>
</section>

<section className='text-center relative text-3xl bg-white'>
  <h1 className>STAKEHOLDER MANAGEMENT</h1>
  </section>
  <section className='text-center  text-3xl   bg-white h-80 pb-14 pl-6.5'> 
<canvas className='relative bg-white top-10 ' id="acquisitions5" ></canvas>
</section>

<section className='text-center relative text-3xl bg-white'>
  <h1 className>VISION AND STRATEGY</h1>
  </section>
  <section className='text-center  text-3xl   bg-white h-80 pb-14 pl-21'> 

  <canvas  className='relative bg-white top-10  ' id="acquisitions6" ></canvas>
 </section>


 <section className='text-center relative text-3xl bg-white'>
  <h1 className>BUSINESS INDUSTRY KNOWLEDGEY</h1>
  </section>
  <section className='text-center  text-3xl  bg-white h-64 pb-18 pl-2.5'> 
<canvas className='relative bg-white top-10 ' id="acquisitions7" ></canvas>
</section>



</section>
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
