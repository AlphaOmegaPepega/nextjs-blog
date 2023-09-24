import axios from "axios";





export default async function getAllUsers(email:string){
const response=await axios.get(`http://localhost:3500/users/${email}`)
const data=await response.data
return data
}