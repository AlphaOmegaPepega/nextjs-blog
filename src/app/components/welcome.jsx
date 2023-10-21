'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import getPersonal from '@/lib/getQuestions'
import getAllUsers from '@/lib/getAllUsers'
import { useSession } from "next-auth/react"
import getDelivery from '@/lib/getDelivery'
import getDesign from '@/lib/getDesgin'
import getDiscovery from '@/lib/getDiscovery'
import getKnowleadge from '@/lib/getIndustryKnowleadge'
import getStackholder from '@/lib/getStackholder'
import getVision from '@/lib/getVision'
import axios from 'axios'

function Welcome() {
  const link='https://produktize-api.onrender.com'
  const { data: session, status } = useSession();
  const [ids,setIds]=useState('')
  const [personal,SetPersonal]=useState('');
  const [delivery,SetDilivery]=useState('');
  const [design,SetDesign]=useState('');
  const [discovery,SetDiscovery]=useState('');
  const [knowleadge,SetKnowleadge]=useState('');
  const [stackholder,SetStackholder]=useState('');
  const [vision,SetVision]=useState('');
  const [loading,SetLoading]=useState(true);


  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const currentDate = `${day}-${month}-${year}`;
useEffect(()=>{

const getData=async()=>{
  const user = await getAllUsers(session.user.email);
  const data = await getPersonal(user._id);
  const delivData = await getDelivery(user._id);
  const designData = await getDesign(user._id);
  const discoverData = await getDiscovery(user._id);
  const industryData = await getKnowleadge(user._id);
  const StackhData = await getStackholder(user._id);
  const VisionData = await getVision(user._id);
  setIds(user._id)

  if(personal==''){
  SetPersonal(await data[data.length - 1]);
  }
  if(delivery==''){
  SetDilivery( await delivData[delivData.length - 1])
  }
  if(design==''){
    SetDesign(await designData[designData.length - 1])
  }
 if(discovery==''){
SetDiscovery(await discoverData[discoverData.length - 1])
 }
  if(knowleadge==''){
    SetKnowleadge(await industryData[industryData.length - 1])
  }
  if(stackholder==''){
    SetStackholder(await StackhData[StackhData.length - 1])
  }
  if(vision==''){
    SetVision(await VisionData[VisionData.length - 1])
  }
  


  
}
if(status=='authenticated'){
  getData()
  setTimeout(() => {
    SetLoading(false)
  },5000)
}


},[status])

const handleAdd=async()=>{
  const endpoints = ['communication', 'Delivery', 'Design', 'Disscovery', 'IndustryKnwlg', 'Stakeholder', 'Vision'];
  const postData = async (endpoint) => {
    return axios.post(`${link}/${endpoint}`,{
      user:ids,
      date:currentDate
    });

  }
  Promise.all(endpoints.map(endpoint => postData(endpoint)));
  axios.post(`${link}/notes`,{
    user:ids
  })




  console.log(personal)
  console.log(ids)
  setTimeout(() => {
    console.log(discovery)
    console.log(delivery)
    console.log(design)
    console.log(knowleadge)
    console.log(vision)
    console.log(stackholder)
    axios.patch(`${link}/communication`,{
      user:ids,
      Collaboration:personal.Collaboration,
      CollabAnswr:personal.CollabAnswr,
      Communication:personal.Communication,
      CommunAnswr:personal.CommunAnswr,
      DecisionMaking:personal.DecisionMaking,
      DecisionAnswr:personal.DecisionAnswr,
      Learning:personal.Learning,
      LearningAnswr:personal.LearningAnswr,
      Quality:personal.Quality,
      QualitAnswr:personal.QualitAnswr,
      Bias:personal.Bias,
      BiasAnswr:personal.BiasAnswr
    })

    axios.patch(`${link}/Disscovery`,{
      user:ids,
      Design:discovery.Design,
      DesignAnswr:discovery.DesignAnswr,
      Market:discovery.Market,
      MarketAnswr:discovery.MarketAnswr,
      Synthesising:discovery.Synthesising,
      SynthesisingAnswr:discovery.SynthesisingAnswr,
      UserResearch:discovery.UserResearch,
      UserResearchAnswr:discovery.UserResearchAnswr

    })
    axios.patch(`${link}/Design`,{
      user:ids,
      Product:design.Product,
      ProductAnswr:design.ProductAnswr,
      UXDesign:design.UXDesign,
      UXDesignAnswr:design.UXDesignAnswr,
      UXTesting:design.UXTesting,
      UXTestingAnswr:design.UXTestingAnswr,
      Visual:design.Visual,
      VisualAnswr:design.VisualAnswr

    })
    axios.patch(`${link}/Delivery`,{
      user:ids,
      Agile:delivery.Agile,
      AgileAnswr:delivery.AgileAnswr,
      Business:delivery.Business,
      BusinessAnswr:delivery.BusinessAnswr,
      Product:delivery.Product,
      ProductAnswr:delivery.ProductAnswr,
      Technology:delivery.Technology,
      TechnologyAnswr:delivery.TechnologyAnswr,
      

    })
    axios.patch(`${link}/Stakeholder`,{
      user:ids,
      Engagement:stackholder.Engagement,
      EngagementAnswr:stackholder.EngagementAnswr,
      LeadershipAnswr:stackholder.LeadershipAnswr,
      Leadership:stackholder.Leadership,
      Management:stackholder.Management,
      ManagementAnswr:stackholder.ManagementAnswr


    })
    axios.patch(`${link}/Vision`,{
      user:ids,
      Vision:vision.Vision,
      VisionAnswr:vision.VisionAnswr,
      RoadMapping:vision.RoadMapping,
      RoadMappingAnswr:vision.RoadMappingAnswr,
      StrategyAnswr:vision.StrategyAnswr,
      Strategy:vision.Strategy,


    })
    axios.patch(`${link}/IndustryKnwlg`,{
      user:ids,
      General:knowleadge.General,
      GeneralAnswr:knowleadge.GeneralAnswr,
      Specific:knowleadge.Specific,
      SpecificAnswr:knowleadge.SpecificAnswr
    })

  }, 3000);
  
    

  
}

  return (
    <section>
<header className='text-center mt-12'>
  <h1 className='text-white text-7xl '>Welcome to the Learnings page!
</h1>

</header>
<section className='text-justify text-white text-4xl p-10 mt-18'>
<article className='p-5'>
<p>Please make sure you have completed the full test at least once before using this page.
   Here on this page you can complete just some segments of the test when you feel you have become more skilful in a specific area.
    While we encourage you to take the full test at least once a year, we also understand that it is very time consuming to do so.
     So therefore we created this segment to add skills one by one.
</p>
 

</article>


<article className='p-5'>

<p>
  To update the skills in a specific area make a selection on the left side by clicking the menu.
   You will see a questionnaire pop up. The blue radio buttons signify the answers you gave when you last filled the test.
    Please select the answers that reflect your current skillset the best and save.
  </p>

</article>
</section>
<footer className='text-center  my-24'>
  {loading &&   <div className="loader-wrapper1">
    <span className="loader1 left-200 -top-10"><span className="loader-inner1"></span></span>
</div>
  
  }

{!loading && <Link href='/main/add/1' className='text-white bg-pink-600 text-2xl  p-7 px-28 rounded-full' onClick={handleAdd}>Add skills</Link>}

</footer>
</section>
  )
}

export default Welcome