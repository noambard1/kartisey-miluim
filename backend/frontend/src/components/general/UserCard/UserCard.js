import React, { useMemo, useState, useEffect } from "react";
import axios from 'axios';
import {
    Card,
    CardBody,
    Row,
    Col,
    Button,
} from "reactstrap";
import history from 'history.js'


// import history from "history";

// const signout = (event) => {
//     event.preventDefault();
//     signout().then((response) => {

//         history.push(`/signin`);
//     });
// };

const UserCard = (props) => {

    return (
        // קישור לדף המידע של החייל 
        <a href={`http://localhost:3000/userInfo/${props.userId}`}>
            <Card xs={12} lg={2} style={{ borderRadius: '40px', boxShadow: "0 1px 10px 0 rgb(0 0 0 / 10%), 0 1px 10px 0 rgb(0 0 0 / 15%)",display: "flex", marginBottom:"3rem" ,marginLeft: '10px', marginRight: '10px', marginTop: '10px' }}>
                <CardBody style={{ padding: "0px" }}>
                    <Row style={{ margin: 'auto' }}>
                        <Col  style={{ padding: "0px", textAlign: "center" }}>
                            <div  style={{ marginTop:"20px" }}>
                                <img src={props.img} alt="Avatar" width="80" height="80"/>
                                <h2>{props.name}</h2>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </a>
    );
};

export default UserCard;