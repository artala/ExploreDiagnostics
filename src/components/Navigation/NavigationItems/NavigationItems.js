import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/vendorProfile" exact>Home</NavigationItem>
        <NavigationItem link="/signInOTP">About</NavigationItem>
        <NavigationItem link="/Labtests">OUR SERVICES</NavigationItem>
        <NavigationItem link="/customerOrders">BLOG</NavigationItem>
        <NavigationItem link="/vendorOrders" exact>CONTACT</NavigationItem>
        {/* Dropdown in User Page */}
        {!props.isAuthenticated?
        <li><div className={classes.mobileDropDown}onClick={props.dropDownHandler}> Welcome sailendra <FontAwesomeIcon  icon={faCaretDown}/></div> 
                <ul className={props.showDropDown?classes.dropDownItems:classes.dropDownItemsClosed}>
                       {props.showDropDown?<div><li><a href="/vendor">My Dashboard</a></li>
                        <li><a href="booking.html">Booking</a></li>
                        <li><NavLink to="/customerOrders" exact>Report Download</NavLink></li>
                        <li><a href="billto-view.html">Bill to View</a></li>
                        <li><a href="/logout">SignOut</a></li></div>
                        :null}
                </ul>
        </li>
        :null}
        {!props.isAuthenticated ?<NavLink className={classes.NavLink} to="/SignUp" exact>
                        SIGN Up </NavLink>:null}
        {!props.isAuthenticated ?<NavLink  className={classes.NavLink} to="/SignIn" exact>
                        SIGN In</NavLink>
        : null }
        
        <NavLink className={classes.NavLink} to="/make-an-appointment" exact>
                MAKE AN APPOINTMENT
        </NavLink>
    </ul>
);

export default navigationItems;