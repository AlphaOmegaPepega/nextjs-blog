import axios from "axios";





export default async function getDesign(id:string){
const response=await axios.get(`https://produktize-api.onrender.com/Design/${id}`)
const data=await response.data
return data
}