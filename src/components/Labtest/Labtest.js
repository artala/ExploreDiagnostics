import React from 'react';
import Classes from './Labtest.css'

const labTest=(props)=>{
    return(
        <div className={Classes.container}>
            <li>
                <b>{props.test}</b>
                <span >{props.price}</span>
            </li>
        </div>
    )
}

export default labTest;