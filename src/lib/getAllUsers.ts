import axios from "axios";





export default async function getAllUsers(email:string){
const response=await axios.get(`https://produktize-api.onrender.com/users/${email}`)
const data=await response.data
return data
}