import axios from "axios";





export default async function getDelivery(id:string){
const response=await axios.get(`https://produktize-api.onrender.com/Delivery/${id}`)
const data=await response.data
return data
}