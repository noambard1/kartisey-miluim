import StatisticsCard from "components/general/StatisticsCard/StatisticsCard";
import UserCard from "components/general/UserCard/UserCard";
import React, { useState, useEffect, useId } from "react";
import axios from 'axios';

import {  useParams, Link, withRouter, Redirect } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom'
import { Row ,Col} from "reactstrap";

import Avatar from "../../../assets/img/default-avatar.png";
import UserSelect from "components/general/Select/UserSelect";

function UserHome() {
  const {unitid} = useParams();

    const [data, setData] = useState([]);
    const [originaldata, setOriginaldata] = useState([]);
    const [filter, setFilter] = useState({});
    
  
    function init() {
        getUnitName();
    }
  
    const getUserByUnit = async (unitName) => {
      try {
        await axios.get(`http://localhost:8000/api/soldierInfoByUnit/${unitName}`)
          .then(response => {
            setData(response.data)
            setOriginaldata(response.data)
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
      }
      catch {
  
      }
    }
    const getUnitName = async () => {
      try {
        await axios.get(`http://localhost:8000/api/unit/${unitid}`)
          .then(response => {
             getUserByUnit(response.data.name);
          })
          .catch((error) => {
            console.log(error);
          })
      }
      catch {
  
      }
    }

    const getFilteredUsers = async () => {
      if(filter.id == "בחר חייל מילואים")
      {
        console.log("error");

        setData(originaldata)
      }
      else{
      let myArrayFiltered1 = originaldata.filter((el) => {
          return filter.id === el._id;
      });
      setData(myArrayFiltered1);
    }
    }
    
      function handleChange(selectedOption) {
        console.log(selectedOption);
        // if(selectedOption.value == "בחר חייל מילואים"){
        //   setFilter({});
        // }
        // else{
          setFilter({ ...filter, id: selectedOption.value });
        // }
      }

    useEffect(() => {
        init();
      }, []);

      useEffect(() => {
        getFilteredUsers();
      }, [filter]);



  return (
    <div style={{width:'60%',margin:"auto"}}>
        <Row>
         <Col>
            <StatisticsCard title = {<span>שמפים פתוחים <br/> ביחידה</span>} value ='100' />
         </Col>
         <Col>
            <StatisticsCard title ='כמה אנשי מילואים ביחידה' value ='200' />
         </Col>
         <Col>
            <StatisticsCard title ='כרטיסיות המילואים שהוזנו' value = {originaldata.length} />
         </Col>
      </Row>
      <Row>
        <Col style={{direction:"rtl", textAlign:"right"}}>
          <UserSelect data={originaldata} placeholder={'בחר חייל מילואים'} handle_change={handleChange}/>
        </Col>
      </Row>
      <Row style={{direction:"rtl"}}>
      {data ? data.map((soldierInfo, index) => {
                {
             return (
                        <Col xs={12} md={3} >
                        <UserCard img = {Avatar} name= {soldierInfo.name} userId = {soldierInfo._id} />
                        </Col>
                    )
                 }
         }) : null}
      </Row>

    </div>
  );
}

export default withRouter(UserHome);