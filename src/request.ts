import axios from "axios";

const request = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 1000,
});

export default request;
