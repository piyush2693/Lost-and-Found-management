
// src/utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:8000/api",
});

api.interceptors.request.use((config) => {
  const storedData = localStorage.getItem("auth");
  const parsedData = JSON.parse(storedData);

  console.log("auth = " + parsedData);
  const token = parsedData.token;
  console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
