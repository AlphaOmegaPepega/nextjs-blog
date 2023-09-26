import axios from "axios";





export default async function getKnowleadge(id:string){
const response=await axios.get(`https://produktize-api.onrender.com/IndustryKnwlg/${id}`)
const data=await response.data
return data
}