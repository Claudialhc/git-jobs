import React, { Component, useState } from "react";
import { Card } from "react-bootstrap";
import API from "../util/API";

function JobCard({ job }) {
  const [isSaved, setIsSaved] = useState(false);
  const handleSaveJobClick = () => {
    // log the job we want to save
    const newFavorite = {
      ...job,
      gitHubJobsId: job.id,
    };
    API.savejob(newFavorite)
      .then((res) => {
        setIsSaved(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center">{job.title}</h2>
        <ul>
          <li>
            <strong>Type:</strong> {job.type}
          </li>
          <li>
            <strong>Location:</strong> {job.location}
          </li>
          <li>
            <strong>Company:</strong> {job.company}
          </li>
          <li>
            <strong>How to Apply:</strong> {job.how_to_apply}
          </li>
          <li>
            <strong>Company Website:</strong> {job.company_url}
          </li>
          <br />
          <button
            disabled={isSaved}
            type="button"
            onClick={() => handleSaveJobClick()}
            href="profile"
            className="btn btn-info"
          >
            Save
          </button>{" "}
          {""}
          {isSaved && <span>job saved!</span>}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
