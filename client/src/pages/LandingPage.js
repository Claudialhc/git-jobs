import React from "react";
import { Jumbotron, Container, Card, Button } from "react-bootstrap";
// import logo from './GitJobsLogo.png';

function LandingPage() {
  return (
    <div>
      <Jumbotron fluid className="bg-info text-white">
        <Container>
          <h1 className="text-center">Welcome to GitJobs</h1>
        </Container>
      </Jumbotron>
      <Card>
        <Card.Body>
       {/* <img src={GitJobsLogo.png} alt="Logo" />; */}
          <h3>
            GitJobs is an app that helps newly graduated Full-Stack Web
            Development students find their first remote job. Due to the
            Covid-19 pandemic, there has been an increase of demand for remote
            jobs across the United States. Our app makes it easier for users to
            find their dream remote job without having to leave the comfort of
            their homes.{" "}
          </h3>
          <br />
          <button type="button" href="signup" class="btn btn-info">Sign Up</button> 
          {/* <Button variant="flat" size="xxl">
            Sign Up
          </Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default LandingPage;
