import axios from "axios";
const API = "https://jobs.github.com/positions.json?description=remote";

export default {
  publicPage: function () {
    return axios.get(API);
  }
};
// {
//   // Gets a single user by id
//   getUser: () => {
//     return axios.get("/api/user");
//   },
//   // sign up a user to our service
//   signUpUser: ({ username, email, password }) => {
//     return axios.post("api/signup", {
//       username,
//       email,
//       password
//     });
//   }
// };

// export default API;
