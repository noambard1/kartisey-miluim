import StatisticsCard from "components/general/StatisticsCard/StatisticsCard";
import UserCard from "components/general/UserCard/UserCard";
import React, { useState } from "react";

import { Link, withRouter, Redirect } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom'
import { Row ,Col} from "reactstrap";

import Avatar from "../../../assets/img/default-avatar.png"
import Searchbar from "components/general/Searchbar/Searchbar";

function UserHome() {

  return (
    <div style={{width:'60%',margin:"auto"}}>
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
      <Row>
        <Col>
          <Searchbar />
        </Col>
      </Row>
      <Row>
         <Col>
             <UserCard img = {Avatar} name='יוסי כהן' />
         </Col>
         <Col>
             <UserCard img = {Avatar} name='יוסי כהן' />
         </Col>
         <Col>
             <UserCard img = {Avatar} name='יוסי כהן' />
         </Col>
         <Col>
             <UserCard img = {Avatar} name='יוסי כהן' />
         </Col>
         <Col>
             <UserCard img = {Avatar} name='יוסי כהן' />
         </Col>
         <Col>
             <UserCard img = {Avatar} name='יוסי כהן' />
         </Col>
      </Row>

    </div>
  );
}

export default withRouter(UserHome);