import axios from "axios";
const baseURL = "https://api.spoonacular.com";
const apiKey = process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   },
});

export { apiKey, axiosInstance };