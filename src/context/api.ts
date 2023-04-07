import Axios from "axios";
import {Cart} from './cart'
import {BoundlessClient} from 'boundless-api-client';
import { Subscription } from "./subscription";


const baseURL = process.env.API_BASE_URL || ''
const get_key = process.env.GET_KEY || ''
const post_key = process.env.POST_KEY || ''
const api = Axios.create({
    baseURL: `${baseURL}`,
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

if (baseURL){
  api.defaults.baseURL = baseURL
}

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
  api: any;
  get_key: string;
  post_key: string;
  cart: Cart;
  subscription: Subscription;
  
  constructor() {
    this.api = api;
    this.get_key = get_key
    this.post_key = post_key
    this.cart = new Cart(api,get_key, post_key)
    this.subscription = new Subscription(api,get_key, post_key)
  }

}

const apiClient = new ApiClient();

export default apiClient;