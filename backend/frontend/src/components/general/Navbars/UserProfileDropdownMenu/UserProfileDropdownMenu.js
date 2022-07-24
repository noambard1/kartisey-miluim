import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from "react-router-dom";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Container,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Alert,
    Spinner,
    Label,
    Col,
    Dropdown,
    DropdownToggle
} from "reactstrap";

import { ThemeContext, themes } from "contexts/ThemeContext";

import setting from "assets/img/setting.png";

import ToggleDarkModeButton from './ToggleDarkModeButton'

function UserProfileDropdownMenu(props) {
    const [color, setcolor] = useState("transparent");

    return (
        <>
            <ThemeContext.Consumer>
                {({ changeTheme, theme }) => (
                    theme == "white-content" ?
                        setcolor("black")
                        : setcolor("white")
                )}
            </ThemeContext.Consumer>
            <Dropdown isOpen={props.dropDownIsOpen} toggle={props.handleClick}>
                <DropdownToggle tag='div'>
                    <div style={{ borderRadius: '50%', height: '40px', width: '40px', background: '#364e68', cursor: 'pointer', textAlign: 'center', lineHeight: '40px', fontSize: '22px', color: 'white' }}
                        onClick={props.handleClick}>
                        {props.fname.slice(0, 1)}
                    </div>
                </DropdownToggle>
                <ul className="dropdown-menu show" style={{ background: props.bgcolor, paddingRight: '10px' }}>
                    <li style={{ direction: 'ltr' }}>
                        <ToggleDarkModeButton color={color} />
                    </li>
                </ul>
            </Dropdown>
        </>
    );
}

export default UserProfileDropdownMenu;
