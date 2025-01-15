import axios from "axios";

const AxiosPublicInstance = axios.create({
  baseURL: "http://localhost:9191/api/v1",
});

export default AxiosPublicInstance;
