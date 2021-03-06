import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
});
    
export const localApi = {
    department: () => api.get("department"),
    employee: () => api.get("employee")
}