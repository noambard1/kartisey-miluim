import React, { useState } from "react";

import { Link, withRouter, Redirect } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom'
import { Row, Col, Container } from "reactstrap";


import StatisticsCard from "components/general/StatisticsCard/StatisticsCard";

function AdminHome() {

  return (
    <div style={{width:'60%',margin:"auto" ,textAlign:"right"}}>
      <h1>סה"כ</h1>
      <Row>
         <Col>
            <StatisticsCard title ='שמפים פתוחים ביחידה' value ='100' />
         </Col>
         <Col>
            <StatisticsCard title ='כמה אנשי מילואים ביחידה' value ='200' />
         </Col>
         <Col>
            <StatisticsCard title ='כרטיסיות המילואים שהוזנו' value ='50' />
         </Col>
      </Row>
      <h1>פיקוד צפון</h1>
      <Row>
         <Col>
            <StatisticsCard title ='שמפים פתוחים ביחידה' value ='100' />
         </Col>
         <Col>
            <StatisticsCard title ='כמה אנשי מילואים ביחידה' value ='200' />
         </Col>
         <Col>
            <StatisticsCard title ='כרטיסיות המילואים שהוזנו' value ='50' />
         </Col>
      </Row>
      <h1>פיקוד דרום</h1>
      <Row>
         <Col>
            <StatisticsCard title ='שמפים פתוחים ביחידה' value ='100' />
         </Col>
         <Col>
            <StatisticsCard title ='כמה אנשי מילואים ביחידה' value ='200' />
         </Col>
         <Col>
            <StatisticsCard title ='כרטיסיות המילואים שהוזנו' value ='50' />
         </Col>
      </Row>
      <h1>פיקוד מרכז</h1>
      <Row>
         <Col>
            <StatisticsCard title ='שמפים פתוחים ביחידה' value ='100' />
         </Col>
         <Col>
            <StatisticsCard title ='כמה אנשי מילואים ביחידה' value ='200' />
         </Col>
         <Col>
            <StatisticsCard title ='כרטיסיות המילואים שהוזנו' value ='50' />
         </Col>
      </Row>
      <h1>זרוע היבשה</h1>
      <Row>
         <Col>
            <StatisticsCard title ='שמפים פתוחים ביחידה' value ='100' />
         </Col>
         <Col>
            <StatisticsCard title ='כמה אנשי מילואים ביחידה' value ='200' />
         </Col>
         <Col>
            <StatisticsCard title ='כרטיסיות המילואים שהוזנו' value ='50' />
         </Col>
      </Row>
    </div>
  );
}

export default withRouter(AdminHome);