import axios from "axios";





export default async function getPersonal(id:string){
const response=await axios.get(`https://produktize-api.onrender.com/communication/${id}`)
const data=await response.data
return data
}