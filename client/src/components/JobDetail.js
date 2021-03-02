import React from "react";
// import axios from "axios";


function JobDetail(props) {
  return (
    <div className="text-center">
      
      <h3>{props.title}</h3>
      <h3> {props.type}</h3>
      <h3>{props.location}</h3>
      <h3>{props.company}</h3>
      <h3> {props.description}</h3>
      <h3> {props.company_url}</h3>
      
    </div>
  );
}
export default JobDetail;