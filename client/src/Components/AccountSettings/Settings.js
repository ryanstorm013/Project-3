import React, { useContext } from 'react'
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import axios from "axios";
import UserContext from "../../Context/UserContext";

const Settings = () => {

    const { userData } = useContext(UserContext);

    const handleUsernameUpdate = async (e) => {
        console.log(userData.userId);
        let newUsername = document.getElementById("userInput").value;
        console.log(newUsername)
        try {
            const updateUserName = await axios.put(`/api/users/${userData.userId}`, 
            {
                displayName: newUsername
            });
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div>
                <Card style={{ width: '50rem', height: '20%' }}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Card.Title>Account Settings</Card.Title>
                        </ListGroup.Item>
                        <Card.Body>
                            <ListGroup.Item>
                                <Form>
                                    <Form.Label> 
                                        Username:
                            </Form.Label>
                                    <Form.Control type="username" placeholder="Change Username"  id="userInput"/>
                                    <Button variant="dark" onClick={(e) => handleUsernameUpdate(e)}>Submit</Button>
                                </Form>
                                <Form>
                                    <Form.Label>
                                        Password:
                            </Form.Label>
                                    <Form.Control type="password" placeholder="Old Password" />
                                    <br></br>
                                    <Form.Control type="password" placeholder="New Password" />
                                    <br></br>
                                    <Form.Control type="password" placeholder="Retype Password" />
                                    <Button variant="dark">Submit</Button>
                                </Form>

                            </ListGroup.Item>

                        </Card.Body>
                    </ListGroup>
                </Card>
            </div>
        </div>
    )
}

export default Settings
