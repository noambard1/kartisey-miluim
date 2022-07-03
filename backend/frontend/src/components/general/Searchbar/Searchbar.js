import React, { useState, useEffect } from "react";
import {
    Card,
    CardBody,
    Row,
    Col,
    Input
} from "reactstrap";

// import history from "history";

// const signout = (event) => {
//     event.preventDefault();
//     signout().then((response) => {

//         history.push(`/signin`);
//     });
// };

const Searchbar = (props) => {

    return (
        <div>
            <Row>
                <Col>
                    <Input  
                    placeholder="חפש"     
                    name="search"     
                    type="string"    
                    onChange={props.handleChange}
                    dir="rtl"
                    style={{marginTop:"6px"}}/>
                 </Col> 
            </Row>
        </div>
    );
};

export default Searchbar;