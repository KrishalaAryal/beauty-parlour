import axiosInstance from "./axios";

type loginPayload = {
    email:String,
    password:String,
}
type registerPayload = {
    username:String,
    email:String,
    password:String
}

//auth routes
export const loginApi = (data:loginPayload)=>axiosInstance.post("/auth/login", data)
export const signUpApi = (data:registerPayload)=>axiosInstance.post("/auth/register",data)
export const logOut = ()=>axiosInstance.post("/auth/logout")

