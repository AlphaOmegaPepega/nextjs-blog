
import getDelivery from '@/lib/getDelivery'
import getDesign from '@/lib/getDesgin'
import getDiscovery from '@/lib/getDiscovery'
import getKnowleadge from '@/lib/getIndustryKnowleadge'
import getStackholder from '@/lib/getStackholder'
import getVision from '@/lib/getVision'
import getPersonal from '@/lib/getQuestions'
export default async function fillSurvery(survey, id) {
  try{
  const [personalData, discoverData, designData, delivData, StackhData, VisionData, industryData] = await Promise.all([
    getPersonal(id),
    getDiscovery(id),
    getDesign(id),
    getDelivery(id),
    getStackholder(id),
    getVision(id),
    getKnowleadge(id)
  ]);

  switch (survey) {
    case '1':
      return await personalData[personalData.length - 1].CollabAnswr;
    case '2':
      return await personalData[personalData.length - 1].CommunAnswr;
    case '3':
      return await personalData[personalData.length - 1].QualitAnswr;
    case '4':
      return await personalData[personalData.length - 1].DecisionAnswr;
    case '5':
      return await personalData[personalData.length - 1].LearningAnswr;
    case '6':
      return await personalData[personalData.length - 1].OrganizationAnswr;
    case '7':
      return await personalData[personalData.length - 1].BiasAnswr;
    case '8':
      return await discoverData[discoverData.length - 1].UserResearchAnswr;
    case '9':
      return await discoverData[discoverData.length - 1].DesignAnswr;
    case '10':
      return await discoverData[discoverData.length - 1].MarketAnswr;
    case '11':
      return await discoverData[discoverData.length - 1].SynthesisingAnswr;
    case '12':
      return await designData[designData.length - 1].ProductAnswr;
    case '13':
      return await designData[designData.length - 1].VisualAnswr;
    case '14':
      return await designData[designData.length - 1].UXDesignAnswr;
    case '15':
      return await designData[designData.length - 1].UXTestingAnswr;
    case '16':
      return await delivData[delivData.length - 1].BusinessAnswr;
    case '17':
      return await delivData[delivData.length - 1].ProductAnswr;
    case '18':
      return await delivData[delivData.length - 1].TechnologyAnswr;
    case '19':
      return await delivData[delivData.length - 1].AgileAnswr;
    case '20':
      return await StackhData[StackhData.length - 1].EngagementAnswr;
    case '21':
      return await StackhData[StackhData.length - 1].LeadershipAnswr;
    case '22':
      return await StackhData[StackhData.length - 1].ManagementAnswr;
    case '23':
      return await VisionData[VisionData.length - 1].VisionAnswr;
    case '24':
      return await VisionData[VisionData.length - 1].RoadMappingAnswr;
    case '25':
      return await VisionData[VisionData.length - 1].StrategyAnswr;
    case '26':
      return await industryData[industryData.length - 1].GeneralAnswr;
    case '27':
      return await industryData[industryData.length - 1].SpecificAnswr;
  }
}catch(error){
  console.log(error)
  return []
}
}