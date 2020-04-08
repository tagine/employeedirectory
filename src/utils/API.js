import axios from "axios";
// use a random user generator to populate DB
const BASEURL = "https://randomuser.me/api/";
const DATATYPE = "json";
const APIKEY = "&apikey=trilogy";

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
