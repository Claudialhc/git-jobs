import axios from "axios";

const API = {
  getJobs: function () {
    return axios.get("/api/job-listings");
  },
  deleteFavorite: function(favoriteId) {
    return axios.delete("/api/user-favorites/" + favoriteId);
  },
  savejob: function (jobData) {
    return axios.post("/api/user-favorites", jobData);
  },
  getUser: function() {
    return axios.get("/api/user");
  },
};


export default API;
