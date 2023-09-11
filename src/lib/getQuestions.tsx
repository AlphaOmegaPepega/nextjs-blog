import axios from "axios";





export default async function getPersonal(id:string){
const response=await axios.get(`http://localhost:3500/communication/${id}`)
const data=await response.data
return data
}