import { useAuth } from "../util/authContext";
import { Jumbotron, Container } from "react-bootstrap";

function ProtectedPage() {
  const auth = useAuth();

const logOut = () => {
  auth.logout();
  
}

  return (
    <div>
      <Jumbotron fluid className="bg-info text-white">
        <Container>
          <h1  className="text-center">Welcome to GitJobs!</h1>
        </Container>
      </Jumbotron>
      <h2>Protected</h2>
      <p>Email: {auth.user.email}</p>
      <button type="button" className="btn btn-success" onClick={logOut}>Log Out</button>
    </div>
  );
}

export default ProtectedPage;
