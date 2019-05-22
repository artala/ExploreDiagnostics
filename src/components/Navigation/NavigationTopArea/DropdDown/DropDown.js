import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Classes from './DropDown.css';
import DropDownCard from './DropDownCard/DropDownCard';

import {NavLink} from 'react-router-dom';

class DropDown extends Component{
    state={
        IsDropDownClicked:false
    }

    DropDownClickedHandler=()=>{
        this.setState(prevState=>{
            return {IsDropDownClicked:!prevState.IsDropDownClicked};
        })
    }
    
    render(){
        let DropDownCSS=Classes.Dropdown;
        if(this.state.IsDropDownClicked){
            DropDownCSS=Classes.DropdownClicked;
        }
        return(
            <div className={Classes.headerTopRight}>
                <ul>
                    <li> 
                        <a className={Classes.link} onClick={this.DropDownClickedHandler} >
                            <span className={Classes.cartIcon}><FontAwesomeIcon icon={faShoppingCart}/></span>
                            <span className={Classes.cartNumber}>02</span>
                        </a>
                    <ul className={DropDownCSS}> 
                        <DropDownCard/>
                        <DropDownCard/>
                    <li><div className={Classes.checkOut}><NavLink to="/">Checkout</NavLink></div></li>
                    </ul>
                </li>
            </ul>
        </div>
        )
    }
}


export default DropDown;