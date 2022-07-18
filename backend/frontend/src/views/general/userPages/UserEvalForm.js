import React, { useState } from "react";

import {useParams, Link, withRouter, Redirect } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom'
import {Table, Row ,Col, FormGroup ,Form ,Input} from "reactstrap";
import axios from "axios";
import history from 'history.js'
import { toast } from "react-toastify";

function UserEvalForm() {
  const {soldierId} = useParams();
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;

  const [data, setData] = useState({
    //general info
    date:"",
    evalType:"",
    evalTypeDetails:"",
    profession:"",
    soldierId:"",

    //mission evaluation
 
    number: "",
    missionDesc:"",
    missionEval:"",
    //professional evaluation

    findingProblems: "",
    professional: "",
    canWorkAlone: "",
    selfRestraint: "",
    overAllScore: "",

    //literal evaluation
    litEval:"",

    //writer info
    writerId:"",
    writerRank:"",
    writerName:"",
    writerProfession:"",
    writerDate:{today},
    _id:{}

  });
  function handleChange(evt) {
    const value = evt.target.value;
    setData({ ...data, [evt.target.name]: value });
  }

  const clickSubmit = (event) => {
    CheckUserEvalForm(event);
  };

  const CheckUserEvalForm = (event) => {
    event.preventDefault();
    var flag = true;
    var ErrorReason = "";
    if (data.date == "") {
      flag = false;
      ErrorReason += "תאריך ריק \n";
    }
    if (data.evalType == "") {
      flag = false;
      ErrorReason += "סוג שמפ ריק \n";
    }
    if (data.evalTypeDetails == "") {
      flag = false;
      ErrorReason += "פירוט שמפ ריק \n";
    }
    if (data.profession == "") {
      flag = false;
      ErrorReason += "תפקיד ביחידה ריק \n";
    }
    if (data.missionDesc == "") {
      flag = false;
      ErrorReason += "תיאור מטלה ריק \n";
    } 
    if (data.missionEval == "") {
      flag = false;
      ErrorReason += "איכות הביצוע ריקה \n";
    } 
    if (data.findingProblems == "") {
      flag = false;
      ErrorReason += "יכולת איתור תקלות ריק \n";
    } 
    if (data.professional == "") {
      flag = false;
      ErrorReason += "מקצועי בתחומו ריק \n";
    } 
    if (data.canWorkAlone == "") {
      flag = false;
      ErrorReason += "יכולת עבודה עצמאית ריק \n";
    } 
    if (data.selfRestraint == "") {
      flag = false;
      ErrorReason += "בעל משמעת עצמית ריק \n";
    } 
    if (data.overAllScore == "") {
      flag = false;
      ErrorReason += "ציון כולל ריק \n";
    } 
    if (data.litEval == "") {
      flag = false;
      ErrorReason += "הערכה מילולית ריקה \n";
    } 
    if (data.writerId == "") {
      flag = false;
      ErrorReason += "מ.א. המעריך ריק \n";
    } 
    if (data.writerRank == "") {
      flag = false;
      ErrorReason += "דרגת המעריך ריקה \n";
    } 
    if (data.writerName == "") {
      flag = false;
      ErrorReason += "שם המעריך ריק \n";
    } 
    if (data.writerProfession == "") {
      flag = false;
      ErrorReason += "תפקיד המעריך ריק \n";
    } 

    if (flag == true) {
      SendEval(event);
    } else {
      toast.error(ErrorReason);
      console.log(ErrorReason);
    }
  };

  const SendEval = (event) => {
    event.preventDefault();
    setData({ ...data, loading: true, successmsg: false, error: false });
    const evaluation = {
        //general info
        date: data.date,
        evalType: data.evalType,
        evalTypeDetails: data.evalTypeDetails,
        profession: data.profession,
        soldierId: soldierId,
        //mission evaluation
        missions:[
            {
                missionDesc: data.missionDesc,
                missionEval: data.missionEval
            }
        ],
        //professional evaluation

        findingProblems:  data.findingProblems,
        professional:  data.professional,
        canWorkAlone:  data.canWorkAlone,
        selfRestraint:  data.selfRestraint,
        overAllScore:  data.overAllScore,
        //literal evaluation
        litEval: data.litEval,
        //writer info
        writerId: data.writerId,
        writerRank: data.writerRank,
        writerName: data.writerName,
        writerProfession: data.writerProfession,
        writerDate: today
    };
    axios
      .post(`http://localhost:8000/api/soldierEvaluation`, evaluation)
      .then((res) => {
        setData({ ...data, loading: false, error: false, successmsg: true, _id:res.data._id });
        toast.success(`הערכה נשלחה בהצלחה`);
        addToUserShamap(res.data._id);
      })
      .catch((error) => {
        setData({
          ...data,
          errortype: error.response.data.error,
          loading: false,
          error: true,
        });
        console.log(error);
      });
        const addToUserShamap = async (shamapId) => {
          try{
            await axios 
            .put(`http://localhost:8000/api/soldierInfo/${soldierId}`, {$push: {"shamapId": shamapId}})
            .then((res) => {
             console.log(`ההערכה נשמרה בהצלחה אצל החייל`);
             history.push(`/userInfo/${soldierId}`);
           })
           .catch((error) => {
             setData({
               ...data,
               errortype: error.response.data.error,
               loading: false,
               error: true,
             });
             console.log(error);
           });
          }
          catch {

          }
        }
    };
  return (
    <div style={{width:'80%',margin:'auto'}}>
        <div style={{width: "100%"}}>
          <Form role="form">
            <Row>
              <Col style={{textAlign: "right"}}>
              <FormGroup dir="rtl">
                    <h3>תפקיד ביחידה</h3>
                    <Input type="select" name="profession" onChange={handleChange}>
                    <option value={"בחר"}>בחר</option>
                        <option value={'תפקיד 1'}>תפקיד 1</option>
                        <option value={'תפקיד 2'}>תפקיד 2</option>
                        <option value={'תפקיד 3'}>תפקיד 3</option>
                        <option value={'תפקיד 4'}>תפקיד 4</option>
                        <option value={'תפקיד 5'}>תפקיד 5</option>
                        <option value={'תפקיד 6'}>תפקיד 6</option>
                    </Input>
              </FormGroup>
              </Col>
              <Col style={{textAlign: "right"}}>
              <FormGroup dir="rtl">
                    <h3>סוג שמ"פ-פירוט</h3>
                    <Input type="string" name="evalTypeDetails" onChange={handleChange}/>
              </FormGroup>
              </Col>
              <Col style={{textAlign: "right"}}>
              <FormGroup dir="rtl">
                    <h3>סוג שמ"פ</h3>
                    <Input type="select" name="evalType" onChange={handleChange}>
                    <option value={"בחר"}>בחר</option>
                        <option value={'אפשרות 1'}>אפשרות 1</option>
                        <option value={'אפשרות 2'}>אפשרות 2</option>
                        <option value={'אפשרות 3'}>אפשרות 3</option>
                        <option value={'אפשרות 4'}>אפשרות 4</option>
                        <option value={'אפשרות 5'}>אפשרות 5</option>
                        <option value={'אפשרות 6'}>אפשרות 6</option>
                    </Input>
              </FormGroup>
              </Col>
              <Col style={{textAlign: "right"}}>
              <FormGroup dir="rtl">
                    <h3>מועד שמ"פ</h3>
                    <Input type="date" name="date" onChange={handleChange}/>
              </FormGroup>
              </Col>
            </Row>
              <Table bordered>
                <thead>
                  <tr>
                    <th>איכות הביצוע (1-5) 1-נמוך ביותר 5- גבוה ביותר</th>
                    <th>תיאור מטלה</th>
                    <th>מספר</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <FormGroup dir="rtl">
                            <Input type="select" name="missionEval" onChange={handleChange}>
                            <option value={"בחר"}>בחר</option>
                                <option value={'1'}>1</option>
                                <option value={'2'}>2</option>
                                <option value={'3'}>3</option>
                                <option value={'4'}>4</option>
                                <option value={'5'}>5</option>
                            </Input>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup dir="rtl">
                            <Input type="string" name="missionDesc" onChange={handleChange}/>
                      </FormGroup>
                    </td>
                    <th scope="row">1</th>
                  </tr>
                </tbody>
              </Table>
              <h3 style={{textAlign: "right"}}>הערכה מקצועית (1-5) 2-נמוך ביותר 5-גבוה ביותר 1-לא רלוונטי</h3>
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
                        <FormGroup dir="rtl">
                              <Input type="select" name="overAllScore" onChange={handleChange}>
                              <option value={"בחר"}>בחר</option>
                                  <option value={'0'}>0</option>
                                  <option value={'1'}>1</option>
                                  <option value={'2'}>2</option>
                                  <option value={'3'}>3</option>
                                  <option value={'4'}>4</option>
                                  <option value={'5'}>5</option>
                                  <option value={'6'}>6</option>
                                  <option value={'7'}>7</option>
                                  <option value={'8'}>8</option>
                                  <option value={'9'}>9</option>
                                  <option value={'10'}>10</option>
                              </Input>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup dir="rtl">
                              <Input type="select" name="selfRestraint" onChange={handleChange}>
                              <option value={"בחר"}>בחר</option>
                                  <option value={'1'}>1</option>
                                  <option value={'2'}>2</option>
                                  <option value={'3'}>3</option>
                                  <option value={'4'}>4</option>
                                  <option value={'5'}>5</option>
                              </Input>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup dir="rtl">
                              <Input type="select" name="canWorkAlone" onChange={handleChange}>
                              <option value={"בחר"}>בחר</option>
                                  <option value={'1'}>1</option>
                                  <option value={'2'}>2</option>
                                  <option value={'3'}>3</option>
                                  <option value={'4'}>4</option>
                                  <option value={'5'}>5</option>
                              </Input>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup dir="rtl">
                              <Input type="select" name="professional" onChange={handleChange}>
                              <option value={"בחר"}>בחר</option>
                                  <option value={'1'}>1</option>
                                  <option value={'2'}>2</option>
                                  <option value={'3'}>3</option>
                                  <option value={'4'}>4</option>
                                  <option value={'5'}>5</option>
                              </Input>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup dir="rtl">
                              <Input type="select" name="findingProblems" onChange={handleChange}>
                              <option value={"בחר"}>בחר</option>
                                  <option value={'1'}>1</option>
                                  <option value={'2'}>2</option>
                                  <option value={'3'}>3</option>
                                  <option value={'4'}>4</option>
                                  <option value={'5'}>5</option>
                              </Input>
                        </FormGroup>
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
                    <td>
                      <FormGroup dir="rtl">
                            <Input type="string" name="litEval" onChange={handleChange}/>
                      </FormGroup>
                    </td>
                  </tr>
                 </tbody>
              </Table>
              <Row>
                <Col style={{textAlign: "right"}}>
                  <FormGroup dir="rtl">
                        <h3>תאריך מילוי</h3>
                        <Input type="string" name="writerDate" value={today} onChange={handleChange} disabled/>
                  </FormGroup>
                </Col>
                <Col style={{textAlign: "right"}}>
                  <FormGroup dir="rtl">
                        <h3>תפקיד המעריך</h3>
                        <Input type="select" name="writerProfession" onChange={handleChange}>
                        <option value={"בחר"}>בחר</option>
                        <option value={'תפקיד 1'}>תפקיד 1</option>
                        <option value={'תפקיד 2'}>תפקיד 2</option>
                        <option value={'תפקיד 3'}>תפקיד 3</option>
                        <option value={'תפקיד 4'}>תפקיד 4</option>
                        <option value={'תפקיד 5'}>תפקיד 5</option>
                        <option value={'תפקיד 6'}>תפקיד 6</option>
                        </Input>
                  </FormGroup>
                </Col>
                <Col style={{textAlign: "right"}}>
                  <FormGroup dir="rtl">
                        <h3>שם המעריך</h3>
                        <Input type="string" name="writerName" onChange={handleChange}/>
                  </FormGroup>
                </Col>
                <Col style={{textAlign: "right"}}>
                  <FormGroup dir="rtl">
                        <h3>דרגת המעריך</h3>
                        <Input type="select" name="writerRank" onChange={handleChange}>
                          <option value={"בחר"}>בחר</option>
                        <option value={'דרגה 1'}>דרגה 1</option>
                        <option value={'דרגה 2'}>דרגה 2</option>
                        <option value={'דרגה 3'}>דרגה 3</option>
                        <option value={'דרגה 4'}>דרגה 4</option>
                        <option value={'דרגה 5'}>דרגה 5</option>
                        <option value={'דרגה 6'}>דרגה 6</option>
                        </Input>
                  </FormGroup>
                </Col>
                <Col style={{textAlign: "right"}}>
                  <FormGroup dir="rtl">
                        <h3>מ.א. המעריך</h3>
                        <Input type="string" name="writerId" onChange={handleChange}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="text-center" style={{marginTop:"10px",marginBottom:"10px"}}>
                    <button onClick={clickSubmit} className="btn">
                        שליחת דיווח
                    </button>
                  </div>
                </Col>
              </Row>
          </Form>
        </div>
    </div>
  );
}

export default withRouter(UserEvalForm);