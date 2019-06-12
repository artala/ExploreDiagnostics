import React,{Component} from 'react';
import PageLayout from '../../hoc/PageLayout/PageLayout';
import Classes from './SignIn.css';
import {updateObject,checkValidity} from '../../shared/utility';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button'
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actions from '../../store/actions/index'


class SignIn extends Component{
    state={
        controls:{
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
            }
            // phone: {
            //     label:'Phone',
            //     elementType: 'input',
            //     elementConfig: {
            //         type: 'tel',
            //         placeholder: 'Phone No *'
            //     },
            //     value: '',
            //     validation: {
            //         required: true,
            //         isPhoneNumber:true
            //     },
            //     valid: false,
            //     touched: false
            // }
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

    submitHandler = (event)=>{
        event.preventDefault();
        const user={
            email: this.state.controls.email.value,
            password:this.state.controls.password.value
            }
        console.log(user)
        this.props.authSignIn(user)
        this.props.history.push('/')
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
        // form=<Spinner/>
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

const mapDispatchToProps = dispatch =>{
    return{
        authSignIn : (user)=>dispatch(actions.authSignIn(user))
    }
}

export default connect(null,mapDispatchToProps)(SignIn);