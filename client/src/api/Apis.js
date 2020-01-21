import FetchApi from "./FetchApi";
import { BaseURL } from "./ApiConstants";

function Apis() {
  this.getRestorants = function() {
    return FetchApi(`${BaseURL}/restorants`);
  };
}
const api = new Apis();
export default api;
