import React, { Component } from "react";
import { Card } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <Card>
        <Card.Body className="bg-success">
      <footer className="footer mt-auto py-3">
        <p className="text-center">© Copyright 2021 GitJobs</p>
      </footer>
      </Card.Body>
      </Card>
    );
  }
}
