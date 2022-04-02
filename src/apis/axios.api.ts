import { loadingOn, loadingOff } from "../components/loading";
import axios from "axios";

axios.interceptors.request.use(
  async (response) => {
    loadingOn();
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async (response) => {
    loadingOff();
    return response;
  },
  (error) => {
    loadingOff();
    return Promise.reject(error);
  }
);
