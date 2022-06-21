import React from "react";
import {Route, Redirect} from "react-router-dom";

//Admin pages
import AdminHome from "views/general/adminPages/AdminHome";
import AdminUpload from "views/general/adminPages/AdminUpload";
//Logging pages
import SignInForm from "views/general/LoggingPages/SignInForm";
import SignUpForm from "views/general/LoggingPages/SignUpForm";
//User pages
import UserEval from "views/general/userPages/UserEval";
import UserHome from "views/general/userPages/UserHome";
import UserInfo from "views/general/userPages/UserInfo";

const routesgeneral =
    (
        <>
            {/* index to the site */}
            {/* <Redirect from="/" to="/signin"/> */}
            {/* Admin Routes */}
            <Route path="/adminHome" exact component={AdminHome} />
            <Route path="/adminUpload" exact component={AdminUpload} />
            {/* Logging Routes */}
            <Route path="/signin" exact component={SignInForm} />
            <Route path="/signup" exact component={SignUpForm} />
            {/* User Routes */}
            <Route path="/userEval" exact component={UserEval} />
            <Route path="/userHome" exact component={UserHome} />
            <Route path="/userInfo" exact component={UserInfo} />
        </>
    )

export default routesgeneral;