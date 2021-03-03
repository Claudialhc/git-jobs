import axios from "axios";

const signUp = {

    getUser: () => {
            return axios.get("/api/user");
          },

      signUpUser: ({ username, email, password }) => {
    return axios.post("api/signup", {
      username,
      email,
      password
    });
}}

export default signUp;