import axios from "axios";

const API = {
  getJobs: function () {
    return axios.get("/api/job-listings");
  }
};


export default API;
