import React,{Component} from 'react';
import PageLayout from '../../hoc/PageLayout/PageLayout';
import Classes from './SignUp.css';
import {updateObject,checkValidity} from '../../shared/utility';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Select from '../../components/UI/Select/Select';


class SignUp extends Component{
    state={
        controls:{
            name: {
                label:"Name",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name *'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            email: {
                label:"Email",
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail:true
                },
                valid: false,
                touched: false
            },
            password: {
                label:"Password",
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength:6
                },
                valid: false,
                touched: false
            },
            phone: {
                label:'Your Mobile Number',
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Your Mobile Number *'
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
        isVendor:false
    }

    // isVendorHandler=()=>{
    //     const isPrevVendor= this.state.isVendor;
    //     this.setState({isVendor:!isPrevVendor})
    // }

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
            Heading={this.state.isVendor?"VENDOR SIGNUP" : "USER SIGNUP"}
            Subtitle1="Home"
            Subtitle2={this.state.isVendor?"Vendor SignUp" : "User SignUp"}/>
            <div className={Classes.makeAppointmentArea}>
                <div className={Classes.container}>
                    <div className={Classes.row}>
                        <div className={Classes.signInForm}>
                            <h2>Registration</h2>
                            <hr/>
                            <div className={Classes.formGroup}>
                            <form onSubmit={this.submitHandler}>
                                {form}
                                {this.state.isVendor?<Select/>:null}
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

export default SignUp;