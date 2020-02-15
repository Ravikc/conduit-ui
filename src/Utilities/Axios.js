import axios from "axios";
import CONSTANTS from "@/constants";

export default {
  async get({ url, headers }) {
    return await axios({
      method: "get",
      baseURL: CONSTANTS.BASE_URL,
      url: url,
      headers: headers
    });
  },
  post() {},
  put() {}
};
