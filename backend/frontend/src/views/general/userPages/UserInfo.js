import React, { useRef,  useState, useEffect } from "react";
import axios from 'axios';

import {  useParams, Link, withRouter, Redirect } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom'
import { Row, Col, Card, CardBody} from "reactstrap";

import Avatar from "../../../assets/img/default-avatar.png";
import ShamapCard from "components/general/shamapCard/shamapCard";
import history from 'history.js';

 

function UserInfo() {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const [ShamapId, setShamapId] = useState([]);
  

  function init() {
    getUserInfo();
  }
  const getUserInfo = async () => {
    try {
      await axios.get(`http://localhost:8000/api/soldierInfo/${id}`)
        .then(response => {
          setData(response.data[0]);
          setShamapId(response.data[0].shamapId);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    catch {

    }
  }

  function isTrue(prop){
    let isTrue = false;
     if(prop){
        isTrue = true;
        return(
         "כן"
        )
     }
     else{
      return(
         "לא"
      )
     }
     
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div dir="rtl" style={{textAlign: "Right", marginTop:"10px", marginRight:"2%", marginLeft:"2%"}}>
         <Row>
          <Col xs={12} md={3}>
          <Card  style={{width: '17rem', paddingRight: "5%", paddingTop: "1rem", paddingBottom: "4rem", borderRadius: '40px', boxShadow: "0 1px 10px 0 rgb(0 0 0 / 10%), 0 1px 10px 0 rgb(0 0 0 / 15%)",display: "flex", marginBottom:"3rem" ,marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>
            <Col>
            <img src= {Avatar} alt="Avatar" width="120" height="120"/>
            </Col>
            <Col>
            <h3 style={{paddingTop: "2%"}}>שם: {data.name}</h3>
            </Col>
            <Col>
            <h3>מספר אישי: {data.personalNum}</h3>
            </Col>
            <Col>
            <h3>דרגה: {data.rank}</h3>
            </Col>
          </Card>
          </Col>
          <Col xs={12} md={9}>
          <Card style={{width: '54rem', paddingRight: "5%", paddingTop: "1rem", borderRadius: '40px', boxShadow: "0 1px 10px 0 rgb(0 0 0 / 10%), 0 1px 10px 0 rgb(0 0 0 / 15%)",display: "flex", marginBottom:"3rem" ,marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>
          <Row>
            <Col>
            <h3>מין: {data.gender}</h3>
            </Col>
            <Col>
            <h3>מקצוע אזרחי: {data.civilianProfession}</h3>
            </Col>
            <Col>
            <h3>חקירת מצח: {isTrue(data.metzachInvestigation)}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
            <h3>גיל: {data.age}</h3>
            </Col>
            <Col>
            <h3>השכלה: {data.education}</h3>
            </Col>
            <Col>
            <h3>חייל בודד: {isTrue(data.loneSoldier)}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
            <h3>פרופיל: {data.profile}</h3>
            </Col>
            <Col>
            <h3>מקצוע: {data.profession}</h3>
            </Col>
            <Col>
            <h3>בן יחיד: {isTrue(data.onlyChild)}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
            <h3>כתובת: {data.address}</h3>
            </Col>
            <Col>
            <h3>שלב מקצועי: {data.professionLevel}</h3>
            </Col>
            <Col>
            <h3>בן שכול: {isTrue(data.bereavedChild)}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
            <h3>יחידה: {data.unit}</h3>
            </Col>
            <Col>
            <h3>טלפונים: {data.phoneNum}</h3>
            </Col>
            <Col>
            <h3>פדוי שבי: {isTrue(data.exHostage)}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
            <h3>מצב משפחתי: {data.maritalStatus}</h3>
            </Col>
            <Col>
            <h3>אב שכול: {isTrue(data.bereavedFather)}</h3>
            </Col>
            <Col>
            <h3>בניש: {isTrue(data.inYeshiva)}</h3>
            </Col>
          </Row>
          </Card>
          </Col>
          </Row>
      <Row>
         {ShamapId ? ShamapId.map((shamap, index) => {
                {
                  let title;
                  if(index>=ShamapId.length-3){//checks if the current evaluation is from the latest 3
                  if(index == ShamapId.length-1){//if newest evaluation
                    title = 'שמ"פ השנה'
                  }
                  if(index == ShamapId.length-2){//if last evaluation
                    title = 'שמ"פ לפני שנה'
                  }
                  if(index == ShamapId.length-3){//if before 2 evaluations
                    title = 'שמ"פ לפני שנתיים'
                  }
                    return (
                                <Col xs={12} md={4} >
                                <ShamapCard title={title} eval="0.00" shamapId= {shamap}/>
                                </Col>
                            )
                  }
                  else{
                    return(null)
                  }
                 }
         }) : null}
      </Row>
      <Col>
          <div className="text-center">
              <button onClick={() => { history.push(`/userEvalForm/${id}`) }} className="btn">להערכת החייל</button>
          </div>
      </Col>
    </div>
  );
}

export default withRouter(UserInfo);