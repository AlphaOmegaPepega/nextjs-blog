import axios from "axios";





export default async function getStackholder(id:string){
const response=await axios.get(`https://produktize-api.onrender.com/Stakeholder/${id}`)
const data=await response.data
return data
}