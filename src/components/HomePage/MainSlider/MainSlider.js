import React from 'react';
import Classes from './MainSlider.css';
import Input from '../../../components/UI/Input/Input';
import AddTest from './AddTest';
import Button from '../../../components/UI/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faPlus} from '@fortawesome/free-solid-svg-icons'



const mainSlider=(props)=>{
    const formElementsArray = [];
        for (let key in props.controls) {
            formElementsArray.push({
                id: key,
                config: props.controls[key]
            });
        }
    let form= formElementsArray.map(formElement=>(
            <AddTest key={formElement.id} id={formElement.id} config={formElement.config} change={props.change}/>
        ))

    return(
        <div className={Classes.container}>
            <div className={Classes.row}>
                <div className={Classes.header}>
                    <h1>Find Diagnostic &amp; Lab Test Prices</h1>
                    <h3>Save upto 50% in Hyderabad</h3>
                    <div className={Classes.form}>
                        <div className={Classes.area}>
                            <Input />
                        </div>
                        <div className={Classes.test}>
                        {form}
                        <Button clicked={props.addTest} btnType="Success">
                        <span>Add Another Test <FontAwesomeIcon icon={faPlus}/></span>
                        </Button>
                        </div>
                        <div className={Classes.search}>
                            <Button btnType="Success">
                            <span><FontAwesomeIcon icon={faSearch}/> Search</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mainSlider;