import React,{Component} from 'react';
import PageLayout from '../../../hoc/PageLayout/PageLayout';
import Classes from './SignUpForm.css';
import {updateObject,checkValidity} from '../../../shared/utility';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

// import Spinner from '../../UI/Spinner/Spinner'



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
            },
            location: {
                label:'Location',
                elementType: 'select',
                elementConfig: {
                    placeholder: 'Select Location',
                    options:[{value:'Hyderabad'},{value:'Shadnagar'}]
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

    submitHandler = (event)=>{
        event.preventDefault();
        const user={name:this.state.controls.name.value,
            email: this.state.controls.email.value,
            password:this.state.controls.password.value,
            mobileNumber:this.state.controls.phone.value}
        if(this.props.isVendor){
            user['location']=this.state.controls.location.value
        }
        console.log(user)
        let category=null
        if(this.props.isVendor){
            category='Vendor'
        }
        else{
            category='User'
        }
        this.props.authStart(user,category)
        this.props.history.push('/')
        // if(this.props.signUpStatus){
        //     this.props.history.push('/')
        // }
        // else{
        //     this.props.history.push('/SignUp')
        // }
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
            if(!this.props.isVendor && key==='location'){
                formElementsArray;
            }
            else{
                formElementsArray.push({
                    id: key,
                    config: this.state.controls[key]
                    });
            }
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
            Heading={this.props.isVendor?"VENDOR SIGNUP" : "USER SIGNUP"}
            Subtitle1="Home"
            Subtitle2={this.props.isVendor?"Vendor SignUp" : "User SignUp"}/>
            <div className={Classes.makeAppointmentArea}>
                <div className={Classes.container}>
                    <div className={Classes.row}>
                        <div className={Classes.signInForm}>
                            <h2>Registration</h2>
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

const mapStateToProps= state =>{
    return{
        isVendor: state.auth.isVendor,
        // signUpStatus : state.auth.signUpStatus
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        authStart : (user,category)=>dispatch(actions.authSignUp(user,category))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);