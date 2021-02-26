import React from "react";
import JobCard from "../components/JobCard";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function PublicPage() {

return (
<div>

<Jumbotron fluid>
  <Container>
    <h1>Welcome (username)</h1>
  </Container>
</Jumbotron>

<h3>Available Jobs:</h3>

<JobCard />

</div>

)
}

export default PublicPage;
