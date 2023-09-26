import axios from "axios";





export default async function getDiscovery(id:string){
const response=await axios.get(`https://produktize-api.onrender.com/Disscovery/${id}`)
const data=await response.data
return data
}