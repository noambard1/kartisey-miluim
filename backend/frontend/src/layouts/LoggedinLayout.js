import React from "react";

// core components
// import Sidebar from "components/general/Sidebar/Sidebar.js";
import WorkplanNavbar from "components/general/Navbars/WorkplanNavbar.js";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import { ThemeContext } from "contexts/ThemeContext";

function LoggedinLayout({ component: Component, ...rest }) {
    // on this page, we need on the body tag the classes .rtl and .menu-on-right
    document.body.classList.add("rtl", "menu-on-right");

    return (
        <ThemeContext.Consumer>
        {({ changeTheme, theme }) => (
                <React.Fragment>
                            <WorkplanNavbar theme={theme}/>
                            <div className="content">
                                <Component {...rest} theme={theme}/>
                            </div>
                </React.Fragment>
            )}
        </ThemeContext.Consumer>
    );
}

export default LoggedinLayout;
