import FetchApi from "./FetchApi";
import { BaseURL } from "./ApiConstants";

function Apis() {
  this.getRestorants = function() {
    return FetchApi(`${BaseURL}/restorants`);
  };
}

export default new Apis();
