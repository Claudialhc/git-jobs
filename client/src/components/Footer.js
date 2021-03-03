import React, { Component } from "react";
import { Card } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <Card>
        <Card.Body className="bg-success btn-outline-success">
      <footer className="footer mt-auto py-3">
        <p className="text-center text-white">© Copyright 2021 GitJobs</p>
      </footer>
      </Card.Body>
      </Card>
    );
  }
}
