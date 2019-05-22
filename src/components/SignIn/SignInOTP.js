import React,{Component} from 'react';
import Classes from './SignInOTP.css';
import {updateObject,checkValidity} from '../../shared/utility';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

class SignInOTP extends Component{
    state={
        controls:{
            otp: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Enter your OTP number'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }
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
        return(
            <div className={Classes.backGround}>
            <div className={Classes.container}>
                <div className={Classes.row}>
                <img className={Classes.image} src="https://cdn2.iconfinder.com/data/icons/luchesa-part-3/128/SMS-512.png"/>
                <br/>
                <h1>Verify your mobile number</h1>
                <p> Thanks for giving your details. An OTP has been sent to your Mobile Number. Please enter the 4 digit OTP below for Successful Registration</p>
                <form onSubmit={this.submitHandler}>
                    <Input key="otp"
                    elementType={this.state.controls["otp"].elementType}
                    elementConfig={this.state.controls["otp"].elementConfig}
                    value={this.state.controls["otp"].value}
                    invalid={!this.state.controls["otp"].valid}
                    shouldValidate={this.state.controls["otp"].validation}
                    touched={this.state.controls["otp"].touched}
                    changed={(event) => this.inputChangedHandler(event, "otp")}/>
                    <Button btnType="Success">Verify</Button>
                </form>
                </div>
            </div>
        </div>
        )
    }
}


export default SignInOTP;