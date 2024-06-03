import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4040/strartup_api"
  
});

export default axiosInstance;

