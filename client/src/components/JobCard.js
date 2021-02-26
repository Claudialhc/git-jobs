import React from "react";
import Card from 'react-bootstrap/Card'

function JobCard() {

    return (
        <Card>
            <Card.Body>

                <h2>Job Name</h2>
                <ul>
                    <li>Type (full-time/part-time)</li>
                    <li>Loacation</li>
                    <li>Created at</li>
                    <li>Decription</li>
                    <li>How to Apply</li>
                    <li>URL</li>
                </ul>

            </Card.Body>
        </Card>

    );
}

export default JobCard;
