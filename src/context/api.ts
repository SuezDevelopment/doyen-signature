import Axios, {AxiosInstance} from "axios";
import {Cart} from './cart';
// import {BoundlessClient} from 'boundless-api-client';
import { Subscription } from "./subscription";
const api_base_url: string = process.env.API_BASE_URL ? process.env.API_BASE_URL : ''

const api: AxiosInstance = Axios.create({
    baseURL: `${api_base_url ? api_base_url : 'https://api.signaturesbydoyen.org/v1/'}`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
});

api.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return error.response.data;
});

let authInterceptorID: number;
export const authenticateAPI = async (token: string) => {
  authInterceptorID = api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export const unauthenticateAPI = () => {
  api.interceptors.request.eject(authInterceptorID);
};

class ApiClient {
  api: AxiosInstance;
  cart: Cart;
  subscription: Subscription;
  
  constructor() {
    this.api = api;
    this.cart = new Cart(api)
    this.subscription = new Subscription(api)
  }

}

const apiClient = new ApiClient();

export default apiClient;