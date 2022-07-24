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



const ShamapCard = (props) => {

    return (
        // קישור לשמ"פ 
        <a href={`http://localhost:3000/userEval/${props.shamapId}`}>
            <Card xs={12} lg={4} style={{ borderRadius: '40px', boxShadow: "0 1px 10px 0 rgb(0 0 0 / 10%), 0 1px 10px 0 rgb(0 0 0 / 15%)",display: "flex", marginBottom:"3rem" ,marginLeft: '10px', marginRight: '10px', marginTop: '10px' }}>
                <CardBody style={{ padding: "0px" }}>
                    <Row style={{ margin: 'auto' }}>
                        <Col  style={{ padding: "0px", textAlign: "center" }}>
                            <div  style={{ marginTop:"20px" }}>
                                <h2>{props.title}</h2>
                                <h2>{props.eval}</h2>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </a>
    );
};

export default ShamapCard;