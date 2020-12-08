import axios from "axios";
import { API_URL_ALL_COTIZACIONES } from "./APISettings";

class APIWrapper {
  _apiTimeout;
  _instance;

  constructor() {
    this._apiTimeout = 60000;
    this._apiResponseType = "strem";

    this._instance = axios.create();
    this._instance.defaults.baseURL = API_URL_ALL_COTIZACIONES;
    this._instance.defaults.timeout = this._apiTimeout;
  }

  // REQUEST GET para traer las cotizaciones
  get(url) {
    return this._instance.get(`${url}`).then(this._parseResponse);
  }

  // CHECK REQUEST para verificar errores de la api
  _parseResponse({ status, data }) {
    // THIS ONLY FOR ERROR
    if (status !== 200 && status !== 201) {
      return Promise.reject(new Error(`Error code ${status}`));
    }
    return data;
  }
}

export default new APIWrapper();
