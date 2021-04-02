import axios from 'axios';
import storage from 'utils/storage';
import successHandler from "./utils/interceptors/successHandler";
import errorHandler from "./utils/interceptors/errorHandler";
import * as commonService from "utils/CommonService";
export const BASE_URL = () => {
  let url;
  if (process.env.REACT_APP_ENV === 'development') {
    url = 'https://agentbooks.api.transactionplan.com/api/'
  }
  if (process.env.REACT_APP_ENV === 'staging') {
    url = 'https://agentbooks.api.transactionplan.com/api/'
  }
  if (process.env.REACT_APP_ENV === 'production') {
    console.log("production if");
    url = 'https://agentbooks.api.transactionplan.com/api/'
  }
  return url;
};
export const API_VIRSION = "/v1";

const instance = axios.create({
  baseURL: BASE_URL()
});
  instance.interceptors.request.use(config => {
  // show loader
  commonService.isLoading.onNext(true);
  return config;
});
instance.interceptors.response.use(config => {
  // hide loader
  commonService.isLoading.onNext(false);
  return config;
});
const token = storage.get("agentBooks_authToken", null);
if (token) instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
instance.interceptors.response.use(
        response => successHandler(response),
        error => errorHandler(error)
);
export default instance;