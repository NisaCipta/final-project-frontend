import axios from "axios";
import { backendURL } from "./EnvVariable";
import { getToken } from "./LocalStorage";

// http client for public
export const httpClient = axios.create({
  baseURL: `${backendURL}/v1/api`,
});


// http client use auth/token
export const newHttpClientAuth = ()=>{
    return axios.create({
        baseURL: `${backendURL}/v1/api`,
        headers: {
          Authorization: getToken(),
        },
      })
}