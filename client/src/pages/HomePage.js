import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import API from "../util/API.js";

function HomePage() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    let mounted = true;
    API.getJobs().then((response) => {
      console.log(response);
      console.log(response.data);
      if (mounted) {
        setJobs(response.data);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome to GitJobs</h1>
        </Container>
      </Jumbotron>
      <h3>Available Jobs:</h3>
      {jobs.map((job, i) => {
        return <JobCard key={i} job={job} />;
      })}
    </div>
  );
}
export default HomePage;
