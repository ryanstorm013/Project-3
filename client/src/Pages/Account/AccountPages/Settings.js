import React from "react";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";

const Settings = () => {
    return (
        <div>
            <Card style={{ width: '50rem', height: '20%'}}>
            <ListGroup>
                 <ListGroup.Item>
                            <Card.Title>Settings</Card.Title>
                        </ListGroup.Item>
                    <Card.Body> 
                    <ListGroup.Item>
                        <Form>
                            <Form.Label>
                                Username:
                            </Form.Label>
                                <Form.Control type="username" placeholder="Change Username"/>
                                <Button variant="dark">Submit</Button>
                        </Form>
                        <Form>
                        <Form.Label>
                                Password:
                            </Form.Label>
                                <Form.Control type="password" placeholder="Old Password"/>
                                <br></br>
                                <Form.Control type="password" placeholder="New Password"/>
                                <br></br>
                                <Form.Control type="password" placeholder="Retype Password"/>
                                <Button variant="dark">Submit</Button>
                        </Form>

                    </ListGroup.Item>

                </Card.Body>
            </ListGroup>
            </Card>
        </div>
    )
}

export default Settings;