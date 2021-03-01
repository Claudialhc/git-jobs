import React, { Component } from "react";
import axios from "axios";
import API from "../util/API";
import JobDetail from "./JobDetail";

import { Card } from "react-bootstrap";

function JobCard({job}) {
    console.log(job)
  return (
    <Card>
      <Card.Body>
        <h2>{job.title}</h2>
        <ul>
          <li>Type: {job.type}</li>
          <li>Location: {job.location}</li>
          <li>Company: {job.company}</li>
          <li>Decription: {job.description}</li>
          <li>How to Apply: {job.how_to_apply}</li>
          <li>Company Website: {job.company_url}</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
