import React, { Component } from "react";
import { Card } from "react-bootstrap";

function JobCard({job}) {
    console.log(job)
    const handleDeleteClick = ()=>{
    console.log("Delete is clicked")
    }
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center">{job.title}</h2>
        <ul>
          <li><strong>Type:</strong> {job.type}</li>
          <li><strong>Location:</strong> {job.location}</li>
          <li><strong>Company:</strong> {job.company}</li>
          <li><strong>How to Apply:</strong> {job.how_to_apply}</li>
          <li><strong>Company Website:</strong> {job.company_url}</li>
          <br />
          <button type="button" href="profile" className="btn btn-info">Save</button> {""}
          <button type="button" onClick={handleDeleteClick} className="btn btn-info">Delete</button>
        </ul>
      </Card.Body>
    </Card>
  );
}



export default JobCard;
