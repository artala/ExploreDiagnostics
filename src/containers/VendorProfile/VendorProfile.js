import React,{Component} from 'react';
import PageLayout from '../../hoc/PageLayout/PageLayout';
import {updateObject,checkValidity} from '../../shared/utility';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Classes from './VendorProfile.css';

class VendorProfile extends Component{
    state={
        controls:{
            name: {
                label:"User Name",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'User Name *'
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
            dateOfBirth: {
                label:"Date of Birth",
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            gender: {
                label:"Gender",
                elementType: 'select',
                elementConfig: {
                    options:[
                        {value:"male", displayValue :"Male"},
                        {value:"female", displayValue :"Female"}
                    ]
                },
                value: '',
                validation: {
                    required: true
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
            alternatePhone: {
                label:'Alternate Mobile Number',
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Alternate Mobile Number *'
                },
                value: '',
                validation: {
                    required: true,
                    isPhoneNumber:true
                },
                valid: false,
                touched: false
            },
            houseNo: {
                label:"H.No/Flat",
                elementType: 'input',
                elementConfig: {
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            city: {
                label:"City",
                elementType: 'input',
                elementConfig: {
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            state: {
                label:"State",
                elementType: 'input',
                elementConfig: {
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            pincode: {
                label:"PinCode",
                elementType: 'input',
                elementConfig: {
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true,
                    maxLength:6
                },
                valid: false,
                touched: false
            },
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
                Heading="VENDOR PROFILE"
                Subtitle1="Home"
                Subtitle2="Vendor Profile"/>
            <div className={Classes.background}>
                <div className={Classes.container}>
                    <div className={Classes.imageContainer}>
                        <img src=""/>
                    </div>
                    <div className={Classes.formContainer}>
                        <h1>VENDOR PROFILE DETAILS</h1>
                        <br/>
                        <form onSubmit={this.submitHandler}>
                            {form}
                            <Button btnType="Success">Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default VendorProfile;