import React, { useContext, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import axios from "axios";
import UserContext from "../../../Context/UserContext";

const MyBikes = () => {
    const { userData } = useContext(UserContext);
    const getTransactions = async function() { 
        try {
            const Transactions = await axios.get( "/api/transaction", { id: userData.userId });
            console.log(Transactions);
        } catch (err) {
            console.log(err);
        }
    }

useEffect(() => {
    getTransactions()
}, [])



    return (
        <h1>My Bikes</h1>
        // <div>
        //     <Card style={{ width: '50rem', height: '30rem'}}>
        //     <ListGroup>
        //          <ListGroup.Item>
        //                     <Card.Title>My Bikes</Card.Title>
        //                 </ListGroup.Item>
        //             <Card.Body> 
        //             <ListGroup.Item>
                        

        //             </ListGroup.Item>

        //         </Card.Body>
        //     </ListGroup>
        //     </Card>
        // </div>
    )
}

export default MyBikes;