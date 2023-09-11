import axios from "axios";





export default async function getVision(id:string){
const response=await axios.get(`http://localhost:3500/Vision/${id}`)
const data=await response.data
return data
}