import React, { useState } from "react";

import {useParams, Link, withRouter, Redirect } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom'
import { Row ,Col} from "reactstrap";

function UserEval() {
  const {id} = useParams();


  return (
    <div style={{width:'80%',margin:'auto'}}>
        <div>
        <Row>
          <Col>
          <h3></h3>
          </Col>
          <Col>
          <h3></h3>
          </Col>
          <Col>
          <h3></h3>
          </Col>
        </Row>
        </div>
    </div>
  );
}

export default withRouter(UserEval);