import React,{Component} from 'react';
import MainSlider from '../../components/HomePage/MainSlider/MainSlider';
import {updateObject,checkValidity} from '../../shared/utility'

class HomePage extends Component{
    state={
        controls:{
            key1: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Test Name (eg: MRI, Ultrasound, ...)'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        divKey:1
    }

    addTestHandler = () => { 
        const updateddivCount= this.state.divKey+1;
        const newTest={};
        newTest['key'+updateddivCount]={
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false}
        this.setState({controls:{...this.state.controls,...newTest},divKey:updateddivCount})
    }

    inputChangedHandler = (event, controlName)=>{
        console.log(controlName)
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
            <div>
               <MainSlider controls={this.state.controls} change={this.inputChangedHandler} addTest={this.addTestHandler}/>
            </div>
        )
    }
}

export default HomePage;
