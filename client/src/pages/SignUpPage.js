import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/authContext";
import API from "../util/API";

function SignUpPage() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""
  });

  const auth = useAuth();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSignUpFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(formState)
      .then(() => {
        auth.login({ email: formState.email, password: formState.password });
      })
      .catch((error) => {
        alert("Unable to sign up.");
        console.log(error);
      });
  };

  if (auth.isLoggedIn) {
    return <Redirect to="/protected" />;
  }

  return (
    <div className="text-center text-white p-5">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUpFormSubmit}>
        <div className="pt-3 pb-2 text-white" htmlFor="username">Username:</div>
        <input
          type="text"
          name="username"
          id="username"
          value={formState.username}
          onChange={handleInputChange}
          required
        />
        <br />
        <div className="pt-3 pb-2 text-white" htmlFor="email">Email:</div>
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={handleInputChange}
          required
        />
        <br />
        <div className="pt-3 pb-2 text-white" htmlFor="password">Password:</div>
        <input
          type="password"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleInputChange}
          required
        />
        <br />
        <div className="pt-4">
        <button type="submit" className="btn btn-success text-white">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
