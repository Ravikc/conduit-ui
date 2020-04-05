import HttpClient from "@/network/httpclient.js";
import URL_CONSTANTS from "@/constants/urlconstants.js";

export default class HttpProxy {
  constructor() {
    this.httpClient = HttpClient.getInstance();
  }

  async registerUser(dto) {
    return await this.httpClient.post(URL_CONSTANTS.SIGN_UP, dto);
  }

  async signin(dto) {
    return await this.httpClient.post(URL_CONSTANTS.SIGN_IN, dto);
  }

  async updateUser(dto) {
    return await this.httpClient.put(URL_CONSTANTS.UPDATE_USER, dto);
  }

  async publishArticle(dto) {
    return await this.httpClient.post(URL_CONSTANTS.PUBLISH_ARTICLE, dto);
  }

  async getArticles(dto) {
    return await this.httpClient.get(URL_CONSTANTS.ARTICLES, dto);
  }

  async getMyFeed(dto) {
    return await this.httpClient.get(URL_CONSTANTS.MY_FEED, dto);
  }
}
