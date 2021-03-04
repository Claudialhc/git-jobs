import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../util/authContext";

function LoginPage() {
  let auth = useAuth();
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const login = (event) => {
    event.preventDefault();
    auth.login(formState);
  };

  if (auth.isLoggedIn) {
    // redirect to /protected if user is logged in
    return <Redirect to="/home" />;
  }

  return (
    <div className="text-center text-white p-5">
      <h1>Login</h1>
      <form onSubmit={login}>
        <div className="pt-3 pb-2" htmlFor="email">Email:</div>
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={handleInputChange}
          required
        />
        <br />
        <div className="pt-3 pb-2" htmlFor="password">Password:</div>
        <input
          type="password"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleInputChange}
          required
          className="input-group-lg"
        />
        <br />
        <div className="pt-4 pb-4">
        <button className="btn btn-success text-white" type="submit" onClick={login}>
          Log in
        </button>
        </div>
      </form>
      <p className="text-dark">
        Don't have an account yet? <Link className="text-white" to="/signup">Sign up here!</Link>
      </p>
    </div>
  );
}

export default LoginPage;
