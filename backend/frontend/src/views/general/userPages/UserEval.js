import React, { useState, useEffect } from "react";
import axios from 'axios';

import {useParams, Link, withRouter, Redirect } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom'
import {Table, Row ,Col, FormGroup ,Form ,Input} from "reactstrap";
import history from 'history.js';


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
          <Row style={{textAlign:"center"}}>
              <Col dir="rtl">
                <h3>מועד שמ"פ: {data.date}</h3>
              </Col>
              <Col dir="rtl">
                <h3>סוג שמ"פ: {data.evalType}</h3>
              </Col>
              <Col dir="rtl">
                <h3>תפקיד ביחידה: {data.profession}</h3>
              </Col>
          </Row>
          <Row style={{textAlign:"right"}}>
            <Col dir="rtl">
                <h3>סוג שמ"פ-פירוט: {data.evalTypeDetails}</h3>
            </Col>
          </Row>
          <Row style={{textAlign:"center"}}>
            <Table bordered>
              <thead>
                <tr>
                  <th>מספר</th>
                  <th>תיאור מטלה</th>
                  <th>איכות הביצוע (1-5) 1-נמוך ביותר 5- גבוה ביותר</th>
                </tr>
              </thead>
              {missions ? missions.map((mission, index) => {
                      {
                  return (
                            <tbody>
                              <tr>
                                <th scope="row">{index+1}</th>
                                <td>
                                  {mission.missionDesc}
                                </td>
                                <td>
                                  {mission.missionEval}
                                </td>
                              </tr>
                            </tbody>
                          )
                          }
                  }) : null}
            </Table>
            <Col>
            <h3 style={{textAlign:"right",marginBottom: "0px"}}>הערכה מקצועית (1-5) 2-נמוך ביותר 5-גבוה ביותר 1-לא רלוונטי</h3>
            </Col>
            <Table bordered>
            <thead>
                <tr>
                    <th>יכולת איתור תקלות</th>
                    <th>מקצועי בתחומו</th>
                    <th>יכולת עבודה עצמאית</th>
                    <th>בעל משמעת עצמית</th>
                    <th>ציון כולל (0-10)</th>
                </tr>
             </thead>
             <tbody>
                  <tr>
                    <td>
                        {data.findingProblems}
                    </td>
                    <td>
                        {data.professional}
                    </td>
                    <td>
                        {data.canWorkAlone}
                    </td>
                    <td>
                        {data.selfRestraint}
                    </td>
                    <td>
                        {data.overAllScore}
                    </td>
                  </tr>
             </tbody>
            </Table>
            <Table bordered>
              <thead>
                  <tr>
                     <th>הערכה מילולית</th>
                  </tr>
              </thead>
                 <tbody>
                  <tr>
                    <td style={{textAlign:"right"}}>
                      {data.litEval}
                    </td>
                  </tr>
                 </tbody>
            </Table>
              <Col dir="rtl">
                <h3>מ.א. המעריך:<br/> {data.writerId}</h3>
              </Col>
              <Col dir="rtl">
                <h3>דרגת המעריך:<br/> {data.writerRank}</h3>
              </Col>
              <Col dir="rtl">
                <h3>שם המעריך:<br/> {data.writerName}</h3>
              </Col>
              <Col dir="rtl">
                <h3>תפקיד המעריך:<br/> {data.writerProfession}</h3>
              </Col>
              <Col dir="rtl">
                <h3>תאריך מילוי:<br/> {data.writerDate}</h3>
              </Col>
          </Row>
        </div>
    </div>
  );
}

export default withRouter(UserEval);