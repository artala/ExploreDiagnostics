import React from 'react';
import Input from '../../../components/UI/Input/Input'


const AddTest=(props)=>{
    const controlName=props.id
    return(
        <Input
        elementType={props.config.elementType}
        elementConfig={props.config.elementConfig}
        value={props.config.value}
        invalid={!props.config.valid}
        shouldValidate={props.config.validation}
        touched={props.config.touched}
        changed={(event) => props.change(event,controlName)}/>
    )
}

export default AddTest;