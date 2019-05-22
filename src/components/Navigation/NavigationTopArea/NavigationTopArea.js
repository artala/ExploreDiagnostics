import React from 'react';
import Classes from './NavigationTopArea.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock,faPhone} from '@fortawesome/free-solid-svg-icons'; 
import DropDown from './DropdDown/DropDown'


const navigationTopArea=(props)=>{
    return(
        <div className={Classes.HeaderTopArea}>
            <div className={Classes.container}>
                <div className={Classes.ContainerLeft}>
                    <p> <FontAwesomeIcon style={{'color':'blue'}} icon={faClock}/> Daily Mon - Sat: 9:00 - 18:00</p>            
                    <p> <FontAwesomeIcon style={{'color':'blue'}} icon={faPhone}/> Call Us: (123) 400 0000</p>
                </div>
                <div className={Classes.ContainerRight}>
                    <DropDown/>
                </div>
            </div>
        </div>        
    )
}

export default navigationTopArea;