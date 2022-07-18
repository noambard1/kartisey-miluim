import React from "react";
import {Route, Redirect} from "react-router-dom";

//Routes
import AdminRoute from "auth/AdminRoute.js";
import UserRoute from "auth/UserRoute";

//Admin pages
import AdminHome from "views/general/adminPages/AdminHome";
import AdminUpload from "views/general/adminPages/AdminUpload";
//Logging pages
import SignInForm from "views/general/LoggingPages/SignInForm";
import SignUpForm from "views/general/LoggingPages/SignUpForm";
//User pages
import UserEvalForm from "views/general/userPages/UserEvalForm";
import UserEval from "views/general/userPages/UserEval";
import UserHome from "views/general/userPages/UserHome";
import UserInfo from "views/general/userPages/UserInfo";

const routesgeneral =
    (
        <>
            {/* index to the site */}
            {/* <Redirect from="/" to="/signin"/> */}
            {/* Admin Routes */}
            <AdminRoute path="/adminHome" exact component={AdminHome} />
            <AdminRoute path="/adminUpload" exact component={AdminUpload} />
            {/* Logging Routes */}
            <Route path="/signin" exact component={SignInForm} />
            <Route path="/signup" exact component={SignUpForm} />
            {/* User Routes */}
            <UserRoute path="/userEvalForm/:soldierId" exact component={UserEvalForm} />
            <UserRoute path="/userEval/:id/:soldierId" exact component={UserEval} />
            <UserRoute path="/userHome/:unitid" exact component={UserHome} />
            <UserRoute path="/userInfo/:id" exact component={UserInfo} />
        </>
    )

export default routesgeneral;