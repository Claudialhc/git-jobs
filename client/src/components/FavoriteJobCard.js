import React, { Component, useState } from "react";
import { Card } from "react-bootstrap";
import API from "../util/API"

function FavoriteJobCard({job, onDeleteFavorite }) {
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
          <button type="button" onClick={() => onDeleteFavorite(job._id)} className="btn btn-info">Delete</button>
        </ul>
      </Card.Body>
    </Card>
  );
}



export default FavoriteJobCard;
