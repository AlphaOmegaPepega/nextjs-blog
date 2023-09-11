import axios from "axios";





export default async function getDiscovery(id:string){
const response=await axios.get(`http://localhost:3500/Disscovery/${id}`)
const data=await response.data
return data
}