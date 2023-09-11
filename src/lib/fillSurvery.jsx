
import getDelivery from '@/lib/getDelivery'
import getDesign from '@/lib/getDesgin'
import getDiscovery from '@/lib/getDiscovery'
import getKnowleadge from '@/lib/getIndustryKnowleadge'
import getStackholder from '@/lib/getStackholder'
import getVision from '@/lib/getVision'
import getPersonal from '@/lib/getQuestions'
export default async function fillSurvery(survey,id){
   


    const personalData=await getPersonal(id)
      const delivData=await getDelivery(id)
      const designData=await getDesign(id)
      const discoverData=await getDiscovery(id)
      const industryData=await getKnowleadge(id)
      const StackhData=await getStackholder(id)
      const VisionData=await getVision(id)


   

      switch(survey){
        case '1': return await personalData[personalData.length-1].CollabAnswr
        
      }
      

}