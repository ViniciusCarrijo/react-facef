import axios from "axios";
import { configs } from "../configs";

const baseURL = configs.apis.starWars;
console.log(baseURL);

export const getFilms = async () => {
  return await axios.request({ baseURL, url: "/films" });
};

export const getFilmById = async (id: number) => {
  return await axios.request({ baseURL, url: `/films/${id}` });
};
