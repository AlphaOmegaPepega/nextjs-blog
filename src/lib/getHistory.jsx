import getDelivery from '@/lib/getDelivery'
import getDesign from '@/lib/getDesgin'
import getDiscovery from '@/lib/getDiscovery'
import getKnowleadge from '@/lib/getIndustryKnowleadge'
import getStackholder from '@/lib/getStackholder'
import getVision from '@/lib/getVision'
import getPersonal from '@/lib/getQuestions'

export default async function getHistory(number, id) {
    let result=[]
    let date=[]
    let final=[]
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
    
    switch (number) {
        case '1':
            personalData.map(data=>{
                if(data.Collaboration){
                    result.push(data.Collaboration)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '2':
            personalData.map(data=>{
                if(data.Communication){
                    result.push(data.Communication)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '3':
            personalData.map(data=>{
                if(data.Quality){
                    result.push(data.Quality)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '4':
            personalData.map(data=>{
                if(data.DecisionMaking){
                    result.push(data.DecisionMaking)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '5':
            personalData.map(data=>{
                if(data.Learning){
                    result.push(data.Learning)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '6':
            personalData.map(data=>{
                if(data.Organisational){
                    result.push(data.Organisational)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '7':
            personalData.map(data=>{
                if(data.Bias){
                    result.push(data.Bias)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '8':
            discoverData.map(data=>{
                if(data.UserResearch){
                    result.push(data.UserResearch)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '9':
            discoverData.map(data=>{
                if(data.Design){
                    result.push(data.Design)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '10':
            discoverData.map(data=>{
                if(data.Market){
                    result.push(data.Market)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '11':
            discoverData.map(data=>{
                if(data.Synthesising){
                    result.push(data.Synthesising)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '12':
            designData.map(data=>{
                if(data.Product){
                    result.push(data.Product)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '13':
            designData.map(data=>{
                if(data.Visual){
                    result.push(data.Visual)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '14':
            designData.map(data=>{
                if(data.UXDesign){
                    result.push(data.UXDesign)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '15':
            designData.map(data=>{
                if(data.UXTesting){
                    result.push(data.UXTesting)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '16':
            delivData.map(data=>{
                if(data.Business){
                    result.push(data.Business)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '17':
            delivData.map(data=>{
                if(data.Product){
                    result.push(data.Product)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '18':
            delivData.map(data=>{
                if(data.Technology){
                    result.push(data.Technology)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '19':
            delivData.map(data=>{
                if(data.Agile){
                    result.push(data.Agile)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '20':
            StackhData.map(data=>{
                if(data.Engagement){
                    result.push(data.Engagement)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '21':
            StackhData.map(data=>{
                if(data.Leadership){
                    result.push(data.Leadership)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '22':
            StackhData.map(data=>{
                if(data.Management){
                    result.push(data.Management)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '23':
            VisionData.map(data=>{
                if(data.Vision){
                    result.push(data.Vision)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '24':
            VisionData.map(data=>{
                if(data.RoadMapping){
                    result.push(data.RoadMapping)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '25':
            VisionData.map(data=>{
                if(data.Strategy){
                    result.push(data.Strategy)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '26':
            industryData.map(data=>{
                if(data.General){
                    result.push(data.General)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final
        case '27':
            industryData.map(data=>{
                if(data.Specific){
                    result.push(data.Specific)
                    date.push(data.date)
                }
                
            })
            final=result.map(function (x, i) { 
                return [x, date[i]] 
            })
            return final

    }
}
catch{

}

}