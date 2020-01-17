function BaseApi(url) {
  return fetch(url).then(res => res.json());
}
export default BaseApi;
