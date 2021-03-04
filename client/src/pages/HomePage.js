import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import API from "../util/API.js";

function HomePage() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    API.getJobs().then((response) => {
      setJobs(response.data);
    });
  }, []);

  return (
    <div>
      <Jumbotron fluid className="bg-info text-white">
        <Container>
          <h1 className="text-center text-white">Welcome to GitJobs!</h1>
        </Container>
      </Jumbotron>
      <h3>Available Jobs:</h3>
      {jobs.map((job) => {
        return <JobCard key={job.id} job={job} />;
      })}
    </div>
  );
}
export default HomePage;
