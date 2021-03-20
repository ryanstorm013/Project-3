import React from "react";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Settings = () => {
    return (
        <div>
            <Card style={{ width: '50rem', height: '20rem'}}>
            <ListGroup>
                 <ListGroup.Item>
                            <Card.Title>Settings</Card.Title>
                        </ListGroup.Item>
                    <Card.Body>
                    
                        
                    <ListGroup.Item>
                    <Card.Subtitle>
                        Change Username
                    </Card.Subtitle>
                    </ListGroup.Item>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                    
                </Card.Body>
                </ListGroup>
            </Card>
        </div>
    )
}

export default Settings;