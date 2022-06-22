import React, { useState } from "react";

import { Link, withRouter, Redirect } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom'
import { Row ,Col} from "reactstrap";

import Avatar from "../../../assets/img/default-avatar.png"

function UserInfo() {

  return (
    <div dir="rtl" style={{textAlign: "Right"}}>
    <Col>
    <img src= {Avatar} alt="Avatar" width="80" height="80"/>
    </Col>
    <Col>
        <Row>
          <Col>
          <h3>מספר אישי:</h3>
          </Col>
          <Col>
          <h3>שלב מקצועי:</h3>
          </Col>
          <Col>
          <h3>אב שכול:</h3>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>דרגה:</h3>
          </Col>
          <Col>
          <h3>מצב משפחתי:</h3>
          </Col>
          <Col>
          <h3>חקירת מצח:</h3>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>שם:</h3>
          </Col>
          <Col>
          <h3>מקצוע אזרחי:</h3>
          </Col>
          <Col>
          <h3>חייל בודד:</h3>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>יחידה:</h3>
          </Col>
          <Col>
          <h3>השכלה:</h3>
          </Col>
          <Col>
          <h3>בן יחיד:</h3>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>כתובת:</h3>
          </Col>
          <Col>
          <h3>גיל:</h3>
          </Col>
          <Col>
          <h3>בן שכול:</h3>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>מקצוע:</h3>
          </Col>
          <Col>
          <h3>מין:</h3>
          </Col>
          <Col>
          <h3>פדוי שבי:</h3>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>פרופיל:</h3>
          </Col>
          <Col>
          <h3>טלפונים:</h3>
          </Col>
          <Col>
          <h3>בניש:</h3>
          </Col>
        </Row>
    </Col>
    </div>
  );
}

export default withRouter(UserInfo);