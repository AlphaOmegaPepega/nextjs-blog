import axios from "axios";





export default async function getKnowleadge(id:string){
const response=await axios.get(`http://localhost:3500/IndustryKnwlg/${id}`)
const data=await response.data
return data
}