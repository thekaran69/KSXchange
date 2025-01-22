import { BACKEND_URL } from "./Helper";
import { commanrequest } from "./ApiCall";
// import axios from "axios";

export const signup = async(data) => {
    return await commanrequest("POST", `${BACKEND_URL}/signup`, data)
}
// http://localhost:3002/signup

// export const forgetpassword = async(data) => {
//     return axios.post('http://localhost:3000/forgetpassword', data) 
// }