import React, { useState, useEffect } from "react";
import axios from 'axios';

import {useParams, Link, withRouter, Redirect } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom'
import {Table, Row ,Col, FormGroup ,Form ,Input} from "reactstrap";

function UserEval() {
  const {id} = useParams();

  const [data, setData] = useState([]);
  const [missions, setMissions] = useState([]);

  function init() {
    getUserEval();
}
const getUserEval = async () => {
  try {
    await axios.get(`http://localhost:8000/api/soldierEvaluation/${id}`)
      .then(response => {
        setData(response.data[0]);
        setMissions(response.data[0].missions);

      })
      .catch((error) => {
        console.log(error);
      })
  }
  catch {

  }
}

  useEffect(() => {
    init();
  }, []);

  return (
    <div style={{width:'90%',margin:'auto'}}>
        <div style={{width: "100%"}}>
          <Row>
              <Col dir="rtl">
                <h3>תפקיד ביחידה: {data.profession}</h3>
              </Col>
              <Col dir="rtl">
                <h3>סוג שמ"פ-פירוט: {data.evalTypeDetails}</h3>
              </Col>
              <Col dir="rtl">
                <h3>סוג שמ"פ: {data.evalType}</h3>
              </Col>
              <Col dir="rtl">
                <h3>מועד שמ"פ: {data.date}</h3>
              </Col>
      <Table bordered>
        <thead>
          <tr>
            <th>איכות הביצוע (1-5) 1-נמוך ביותר 5- גבוה ביותר</th>
            <th>תיאור מטלה</th>
            <th>מספר</th>
          </tr>
        </thead>
        {missions ? missions.map((mission, index) => {
                {
             return (
                      <tbody>
                        <tr>
                          <td>
                            {mission.missionEval}
                          </td>
                          <td>
                            {mission.missionDesc}
                          </td>
                          <th scope="row">{mission.number}</th>
                        </tr>
                      </tbody>
                    )
                    }
            }) : null}
      </Table>
          </Row>
        </div>
    </div>
  );
}

export default withRouter(UserEval);