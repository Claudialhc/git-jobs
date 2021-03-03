import React, { Component } from "react";
import { Card } from "react-bootstrap";

function JobCard({job}) {
    console.log(job)
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center">{job.title}</h2>
        <ul>
          <li><strong>Type:</strong> {job.type}</li>
          <li><strong>Location:</strong> {job.location}</li>
          <li><strong>Company:</strong> {job.company}</li>
          {/* <li>Decription: {job.description}</li> */}
          <li><strong>How to Apply:</strong> {job.how_to_apply}</li>
          <li><strong>Company Website:</strong> {job.company_url}</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
