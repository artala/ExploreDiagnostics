import React from 'react';
import Classes from './SignUpTile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const signUpTile = (props) =>{
    return(
        <div className={Classes.squareServiceBlock}>
            <div onClick={props.clicked} className={Classes.ssbBlock}>
            <div className={Classes.ssbIcon}>
                <FontAwesomeIcon icon={props.icon}/>
            </div>
            <div className={Classes.ssbTitle}>{props.title}</div>
            </div>
        </div>
    )
}

export default signUpTile;