import axios from "axios";





export default async function getDesign(id:string){
const response=await axios.get(`http://localhost:3500/Design/${id}`)
const data=await response.data
return data
}