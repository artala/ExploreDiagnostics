import React from 'react';
import Classes from './SignUpTile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const signUpTile = (props) =>{
    return(
        <div className={Classes.squareServiceBlock}>
            <NavLink to={props.clicked}>
            <div className={Classes.ssbIcon}>
                <FontAwesomeIcon icon={props.icon}/>
            </div>
            <div className={Classes.ssbTitle}>{props.title}</div>
            </NavLink>
        </div>
    )
}

export default signUpTile;