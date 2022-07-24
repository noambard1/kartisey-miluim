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
          <Row style={{textAlign:"right"}}>
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
                                <th scope="row">1</th>
                              </tr>
                            </tbody>
                          )
                          }
                  }) : null}
            </Table>
            <Col>
            <h3 style={{textAlign:"right"}}>הערכה מקצועית (1-5) 2-נמוך ביותר 5-גבוה ביותר 1-לא רלוונטי</h3>
            </Col>
            <Table bordered>
            <thead>
                <tr>
                    <th>ציון כולל (0-10)</th>
                    <th>בעל משמעת עצמית</th>
                    <th>יכולת עבודה עצמאית</th>
                    <th>מקצועי בתחומו</th>
                    <th>יכולת איתור תקלות</th>
                </tr>
             </thead>
             <tbody>
                  <tr>
                    <td>
                        {data.overAllScore}
                    </td>
                    <td>
                        {data.selfRestraint}
                    </td>
                    <td>
                        {data.canWorkAlone}
                    </td>
                    <td>
                        {data.professional}
                    </td>
                    <td>
                        {data.findingProblems}
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
                <h3>תאריך מילוי: {data.writerDate}</h3>
              </Col>
              <Col dir="rtl">
                <h3>תפקיד המעריך: {data.writerProfession}</h3>
              </Col>
              <Col dir="rtl">
                <h3>שם המעריך: {data.writerName}</h3>
              </Col>
              <Col dir="rtl">
                <h3>דרגת המעריך: {data.writerRank}</h3>
              </Col>
              <Col dir="rtl">
                <h3>מ.א. המעריך: {data.writerId}</h3>
              </Col>
          </Row>
          <Col>
          <div className="text-center" style={{marginTop:"10px",marginBottom:"10px"}}>
              <button onClick={history.goBack} className="btn">חזור</button>
          </div>
          </Col>
        </div>
    </div>
  );
}

export default withRouter(UserEval);