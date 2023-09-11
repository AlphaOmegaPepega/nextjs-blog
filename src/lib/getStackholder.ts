import axios from "axios";





export default async function getStackholder(id:string){
const response=await axios.get(`http://localhost:3500/Stakeholder/${id}`)
const data=await response.data
return data
}