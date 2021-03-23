import React, { useContext, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import UserContext from "../../Context/UserContext"

const Owned = () => {
    const { userData } = useContext(UserContext);

    const getTransactions = async function () {
        try {
            const ownedBikes = await axios.get(`/api/transaction/${userData.userId}`);
            console.log(ownedBikes);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(async () => {
        getTransactions()
    }, [])

    return (
        <div>

            <div>
                <Card style={{ width: '50rem', height: '30rem' }}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Card.Title>My Owned Bikes</Card.Title>
                        </ListGroup.Item>
                        <Card.Body>
                            <ListGroup.Item>


                            </ListGroup.Item>

                        </Card.Body>
                    </ListGroup>
                </Card>
            </div>
        </div>
    )
}

export default Owned
