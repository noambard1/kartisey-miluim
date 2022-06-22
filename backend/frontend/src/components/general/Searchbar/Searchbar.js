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

    const [data, setData] = useState({
        search: ""
      });

      function handleChange(evt) {
        const value = evt.target.value;
        setData({ ...data, [evt.target.name]: value });
      }

      const clickSubmit = (event) => {
       console.log(data.search)
      };

    return (
        <div>
            <Row>
                <Col>
                    <Input  
                    placeholder="חפש"     
                    name="search"     
                    type="string"    
                    value={data.search}  
                    onChange={handleChange}
                    dir="rtl"
                    style={{marginTop:"6px"}}/>
                 </Col>
                 <Col>
                    <button onClick={clickSubmit} className="btn">
                    חפש
                    </button>
                 </Col>   
            </Row>
        </div>
    );
};

export default Searchbar;