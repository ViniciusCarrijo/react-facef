import axios from "axios";

const baseURL = "https://economia.awesomeapi.com.br";

export const getPrice = async () =>
  axios.request({ baseURL, url: "/json/all" });

export const getPriceBRL = async () =>
  axios.request({ baseURL, url: "/json/all/USD-BRL" });
