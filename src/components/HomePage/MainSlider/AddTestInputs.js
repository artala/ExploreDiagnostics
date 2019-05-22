import React from 'react';
import AddTest from './AddTest'
import Input from '../../../components/UI/Input/Input'

const AddTestInputs=(props)=>{
    // const addTest= {[...Array(10)].map((x, i) =>
    //     <ObjectRow key={i} />
    //   )}
    const addTest=[...Array(props.divCount)].map((_,i) => {
        console.log(i)
        return (
        <Input key={i}
        elementType="input"
        elementConfig={{
            type: 'text',
            placeholder: 'Enter Test Name (eg: MRI, Ultrasound, ...)',

        }}
        value={props.value}
        invalid={props.valid}
        shouldValidate={{required: true}}
        touched={props.touched}
        changed={(event) => this.inputChangedHandler(event,{i})}/>
        )
    })

    return(
        <div>
            {addTest}
        </div>
    )
}

export default AddTestInputs;