import axios from "axios";

const API = axios.create({
    baseURL: "/api/v1/users",
    withCredentials: true,
});

// ---------- Auth APIs ------- //
export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const logoutUser = () => API.get("/logout");
export const getCurrentUser = () => API.get("/me");
export const resendVerifyEmail = (data) => API.post("/resendverifyemail", data);
export const forgotPasswordRequest = (data) => API.post("/passwordresetrequest", data);
export const resetPassword = (token, data) => API.post(`/reset-password/${token}`, data);

export default API;