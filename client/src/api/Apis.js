import FetchApi from "./FetchApi";
import { BaseURL } from "../constants/AppConstants";

const Apis = {
  getRestorants: function() {
    return FetchApi(`${BaseURL}/getrestorants`);
  }
};

export default Apis;
