import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  headers: {
    "Content-type": "application/json",
  },
});

axiosInstance.defaults.headers.common.Authorization = `Basic ${window.btoa(
  "frontend@shyftplan.com:api_test_auth_token"
)}`;

export default axiosInstance;
