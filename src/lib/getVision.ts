import axios from "axios";





export default async function getVision(id:string){
const response=await axios.get(`https://produktize-api.onrender.com/Vision/${id}`)
const data=await response.data
return data
}