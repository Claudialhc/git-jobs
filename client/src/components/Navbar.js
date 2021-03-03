import { Link } from "react-router-dom";
import { useAuth } from "../util/authContext";
import { Navbar, Nav } from "react-bootstrap";

const styles = {
  ul: {
    display: "flex",
    justifyContent: "flex-start",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  li: { display: "block", padding: "0.5em" },
};

function Header() {
  const auth = useAuth();

  const signOut = () => {
    auth.logout();
  };
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/home">
        GitJobs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Sign Up
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Log In
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Log In
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/public">
            Job Search
          </Nav.Link> */}
          <Nav.Link as={Link} to="/profile">
            Favorites
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
