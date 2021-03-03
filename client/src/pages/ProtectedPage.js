import { useAuth } from "../util/authContext";
import { Jumbotron, Container } from "react-bootstrap";
import SignUpPage from "./SignUpPage";

function ProtectedPage() {
  const auth = useAuth();
  return (
    <div>
      <Jumbotron fluid className="bg-info text-white">
        <Container>
          <h1  className="text-center">Welcome to GitJobs!</h1>
        </Container>
      </Jumbotron>
      <h2>Protected</h2>
      <p>Email: {auth.user.email}</p>
    </div>
  );
}

export default ProtectedPage;
