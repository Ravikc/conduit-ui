import axios from "axios";
import URL_CONSTANTS from "@/constants/urlconstants";

export default class HttpClient {
  static instance;

  static getInstance() {
    if (this.instance == null) {
      this.instance = axios.create({
        baseURL: URL_CONSTANTS.BASE_URL,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const httpClient = new HttpClient();

      this.instance.interceptors.request.use(
        httpClient.getRequestInterceptor()
      );

      this.instance.interceptors.response.use(
        httpClient.getSuccessResponseInterceptor(),
        httpClient.getErrorResponseInterceptor()
      );
    }

    return this.instance;
  }

  getRequestInterceptor() {
    return (config) => {
      const token = this.getToken();
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return config;
    };
  }

  getSuccessResponseInterceptor() {
    return (response) => {
      console.log(response);
      return response;
    };
  }

  getErrorResponseInterceptor() {
    return (error) => {
      console.log(error);
    };
  }

  getToken() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).token : null;
  }
}
