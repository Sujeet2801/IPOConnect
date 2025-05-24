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

// ---------- Blog APIs ------- //
export const fetchAllBlogs = () => API.get("/blogs");
export const createBlog = (data) => API.post("/blog", data);
export const updateBlog = (titleParams, data) => API.put(`/blog/${titleParams}`, data);
export const deleteBlog = (title) => API.delete(`/blog/${title}`);

// ---------- IPO APIs --------- //
export const registerIpo = (data) => API.post('/ipo/register', data);
export const updateIpo = (companyName, data) => API.put(`/ipo/update/${companyName}`, data);
export const deleteIpo = (companyName) => API.delete(`/ipo/${companyName}`);
export const fetchAllIpos = () => API.get('/ipos');
export const fetchIposByStatus = (status) => API.get('/ipo/by-status', { params: { status } });

export default API;