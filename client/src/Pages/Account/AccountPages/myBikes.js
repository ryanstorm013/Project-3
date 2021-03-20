import React from "react";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";

const MyBikes = () => {
    return (
        <div>
            <Card style={{ width: '50rem', height: '30rem'}}>
            <ListGroup>
                 <ListGroup.Item>
                            <Card.Title>My Bikes</Card.Title>
                        </ListGroup.Item>
                    <Card.Body> 
                    <ListGroup.Item>
                        

                    </ListGroup.Item>

                </Card.Body>
            </ListGroup>
            </Card>
        </div>
    )
}

export default MyBikes;