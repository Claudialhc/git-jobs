import React, { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import { Jumbotron, Container } from "react-bootstrap";
import JobCard from "../components/JobCard";
import API from "../util/API.js";

function ProtectedPage() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    API.getUser().then((response) => {
      setJobs(response.data.favorites);

      // (response.data);
    });
  }, []);

  const auth = useAuth();
  return (
    <div>
      <Jumbotron fluid className="bg-info text-white">
        <Container>
          <h1 className="text-center">Welcome to GitJobs!</h1>
        </Container>
      </Jumbotron>

      {jobs.map((job) => {
        return <JobCard key={job.id} job={job} />;
      })}
    </div>
  );
}

export default ProtectedPage;
