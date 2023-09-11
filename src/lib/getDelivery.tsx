import axios from "axios";





export default async function getDelivery(id:string){
const response=await axios.get(`http://localhost:3500/Delivery/${id}`)
const data=await response.data
return data
}