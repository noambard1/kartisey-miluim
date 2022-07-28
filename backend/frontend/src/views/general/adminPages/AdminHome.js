import React, { useState, useEffect } from "react";

import { Link, withRouter, Redirect } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom'
import { Row, Col, Container } from "reactstrap";
import axios from 'axios';
import history from 'history.js';


import StatisticsCard from "components/general/StatisticsCard/StatisticsCard";

function AdminHome() {

   const [data, setData] = useState([]);
   const [unit1CardsData, setUnit1CardsData] = useState([]);
   const [unit2CardsData, setUnit2CardsData] = useState([]);
   const [unit3CardsData, setUnit3CardsData] = useState([]);
   const [unit4CardsData, setUnit4CardsData] = useState([]);
   var unit1Cards = 0;
   var unit2Cards = 0;
   var unit3Cards = 0;
   var unit4Cards = 0;
 
   function init() {
      getAllSoldierCards();
  }

  const getAllSoldierCards = async () => {
   try {
     await axios.get(`http://localhost:8000/api/soldierInfo`)
       .then(response => {
         setData(response.data);
         for(let i=0;i<response.data.length;i++){
            //change into the actual name of the units
            if(response.data[i].unit == "יחידה 1"){
               unit1Cards++;
            }
            if(response.data[i].unit == "יחידה 2"){
               unit2Cards++;
            }
            if(response.data[i].unit == "יחידה 3"){
               unit3Cards++;
            }
            if(response.data[i].unit == "יחידה 4"){
               unit4Cards++;
            }
         }
         setUnit1CardsData(unit1Cards);
         setUnit2CardsData(unit2Cards);
         setUnit3CardsData(unit3Cards);
         setUnit4CardsData(unit4Cards);
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
            <StatisticsCard title ='כרטיסיות המילואים שהוזנו' value ={data.length} />
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
            <StatisticsCard title ='כרטיסיות המילואים שהוזנו' value ={unit1CardsData} />
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
            <StatisticsCard title ='כרטיסיות המילואים שהוזנו' value ={unit2CardsData} />
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
            <StatisticsCard title ='כרטיסיות המילואים שהוזנו' value ={unit3CardsData} />
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
            <StatisticsCard title ='כרטיסיות המילואים שהוזנו' value ={unit4CardsData} />
         </Col>
      </Row>
        <div className="text-center">
              <button onClick={() => { history.push(`/adminUpload`) }} className="btn">להוספת חיילים למערכת</button>
        </div>
    </div>
  );
}

export default withRouter(AdminHome);