import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProtectedPage from "./pages/ProtectedPage";
import PublicPage from "./pages/PublicPage";
import SignUpPage from "./pages/SignUpPage";
import UserProfilePage from "./pages/UserProfilePage";
import { ProvideAuth } from "./util/authContext";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            maxWidth: "50rem",
          }}
        >
          <Navbar />

          <Switch>
          <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path="/profile">
              <UserProfilePage />
            </Route>
            <PrivateRoute path="/favorites">
              <ProtectedPage />
            </PrivateRoute>
            <Route exact path="*">
              <LandingPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </ProvideAuth>
  );
}

export default App;
