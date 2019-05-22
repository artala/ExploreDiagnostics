import React from 'react';
import Classes from './DropDownCard.css'
import {NavLink} from 'react-router-dom';
import Image from '../../../../../assets/images/product/1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const dropDownCard =()=>{
    return(
        <li className={Classes.main}>
            <div className={Classes.container}>
            <div className={Classes.row}>
                <div className={Classes.cardImage}> 
                    <NavLink to="/"> 
                        <img src={Image} alt="product"></img>
                    </NavLink> 
                </div>
                <div className={Classes.cardBody}>
                    <div className={Classes.cartBodyHeading}>
                        <h4><NavLink to="/">Pharmaceuticals</NavLink></h4>
                        <div className={Classes.cartBodyHeadingIcon}>
                            <NavLink to="/">
                                <FontAwesomeIcon  icon={faTrash}/>
                            </NavLink>
                        </div>
                    </div>
                    <p>Quantity : 1</p>
                <div className={Classes.cardPrice}> <NavLink to="/">$49</NavLink> </div>
            </div>
            </div>
            </div>
        </li>
    )
}

export default dropDownCard;