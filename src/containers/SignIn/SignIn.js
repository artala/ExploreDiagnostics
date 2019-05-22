import React,{Component} from 'react';
import PageLayout from '../../hoc/PageLayout/PageLayout';
import Classes from './SignIn.css';
import {updateObject,checkValidity} from '../../shared/utility';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button'


class SignIn extends Component{
    state={
        controls:{
            phone: {
                label:'Phone',
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Phone No *'
                },
                value: '',
                validation: {
                    required: true,
                    isPhoneNumber:true
                },
                valid: false,
                touched: false
            }
        },
        isSignup:true
    }

    inputChangedHandler = (event, controlName)=>{
        const updatedControls= updateObject(this.state.controls,{
            [controlName]: updateObject(this.state.controls[controlName],{
                value:event.target.value,
                valid:checkValidity(event.target.value,this.state.controls[controlName].validation),
                touched:true
            })
        })
        this.setState({controls:updatedControls})
    }
    render(){
        const formElementsArray = [];
        for (let key in this.state.controls) {
             console.log(key,this.state.controls[key]);
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        let form= formElementsArray.map(formElement=>(
            <div>
            <label>{formElement.config.label}</label>
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
            </div>
        ))
        return(
            <div>
            <PageLayout 
            Heading="SIGNIN"
            Subtitle1="Home"
            Subtitle2="Sign In"/>
            <div className={Classes.makeAppointmentArea}>
                <div className={Classes.container}>
                    <div className={Classes.row}>
                        <div className={Classes.signInForm}>
                            <h2>Signin</h2>
                            <hr/>
                            <div className={Classes.formGroup}>
                            <form onSubmit={this.submitHandler}>
                                {form}
                                <Button btnType="Success">Submit</Button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default SignIn;