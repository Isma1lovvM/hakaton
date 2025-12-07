import axios from "axios";

const api = axios.create({
  baseURL: "https://691ec120bb52a1db22bef0d3.mockapi.io/",
  timeout: 5000,
});

export default api;
