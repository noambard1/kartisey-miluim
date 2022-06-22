import React from "react";
import {
    Card,
    CardBody,
    Row,
    Col,
} from "reactstrap";

// import history from "history";

// const signout = (event) => {
//     event.preventDefault();
//     signout().then((response) => {

//         history.push(`/signin`);
//     });
// };

const StatisticsCard = (props) => {

    return (
        <Card xs={12} lg={4} style={{ borderRadius: '40px', boxShadow: "0 1px 10px 0 rgb(0 0 0 / 10%), 0 1px 10px 0 rgb(0 0 0 / 15%)",display: "flex", marginBottom:"3rem" ,marginLeft: '10px', marginRight: '10px', marginTop: '10px' }}>
            <CardBody style={{ padding: "0px" }}>
                <Row style={{ margin: 'auto' }}>
                    <Col  style={{ padding: "0px", textAlign: "center" }}>
                        <div  style={{ marginTop:"20px" }}>
                            <h3>{props.title}</h3>
                            <h2>{props.value}</h2>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default StatisticsCard;