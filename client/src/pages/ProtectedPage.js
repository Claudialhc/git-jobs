import { useAuth } from "../util/authContext";
import { Jumbotron, Container } from "react-bootstrap";
function ProtectedPage() {
  const auth = useAuth();
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome (username)</h1>
        </Container>
      </Jumbotron>
      <h2>Protected</h2>
      <p>Email: {auth.user.email}</p>
    </div>
  );
}

export default ProtectedPage;
