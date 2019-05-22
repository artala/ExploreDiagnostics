import React,{Component} from 'react';
import PageLayout from '../../hoc/PageLayout/PageLayout';
import Input from '../../components/UI/Input/Input';
import Classes from './LabTests.css';
import Button from '../../components/UI/Button/Button';
import {updateObject,checkValidity} from '../../shared/utility';
import LabTest from '../../components/Labtest/Labtest'
import axios from '../../axios-orders'

class LabTests extends Component{
    state={
        labTests:null,
        controls:{
            search: {
                elementType: 'input',
                elementConfig: {
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            price: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'price'
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
    addTestHandler=(event)=>{
        event.preventDefault();
        const newTest={
            test:this.state.controls.search.value,
            price:this.state.controls.price.value
        }
        axios.post('/labtests.json',newTest)
        .then(response=> this.getTestsHandler())
        .catch(error=>console.log(error))
        this.setState({controls:
                            {...this.state.controls,
                                search:{value:''},
                                price:{value:''}
                            }
                        })        
    }

    getTestsHandler=()=>{
        axios.get('https://explore-diagnostics.firebaseio.com/labtests.json')
        .then(response=>{
            this.setState({labTests:response.data})
        })
    }
    componentDidMount(){
        this.getTestsHandler();
    }
    render(){
        let labtestsdiv=<div>No Tests Available</div>
        console.log(this.state.labTests)
        if (this.state.labTests != null){
            let labTestsKeysList=Object.keys(this.state.labTests)
            labtestsdiv=labTestsKeysList.map(labTestKey=>(
                <LabTest
                        key={labTestKey}
                        test={this.state.labTests[labTestKey].test}
                        price={this.state.labTests[labTestKey].price}/>
            ))
        }
        return(
            <div>
            <PageLayout 
            Heading="DIAGNOSTICS LABTEST PAGE"
            Subtitle1="Home"
            Subtitle2="Diagnostics Labtest Page"/>
            <div className={Classes.container}>
                <h2>LIST OF LABTEST</h2>    
                    <form onSubmit={this.addTestHandler}>
                        <div className={Classes.labtestSearch}>
                        <div className={Classes.labtestInput}>
                            <Input 
                            key="search"
                            elementType={this.state.controls["search"].elementType}
                            elementConfig={this.state.controls["search"].elementConfig}
                            value={this.state.controls["search"].value}
                            invalid={!this.state.controls["search"].valid}
                            shouldValidate={this.state.controls["search"].validation}
                            touched={this.state.controls["search"].touched}
                            changed={(event) => this.inputChangedHandler(event,'search')}/>
                        </div>
                        <div className={Classes.labtestPrice}>
                            <Input key="price"
                            elementType={this.state.controls["price"].elementType}
                            elementConfig={this.state.controls["price"].elementConfig}
                            value={this.state.controls["price"].value}
                            invalid={!this.state.controls["price"].valid}
                            shouldValidate={this.state.controls["price"].validation}
                            touched={this.state.controls["price"].touched}
                            changed={(event) => this.inputChangedHandler(event, 'price')}/>
                        </div>
                        <div className={Classes.labtestButton}><Button >ADD</Button></div>
                        </div>
                    </form>
                <div className={Classes.labTests}>
                    {labtestsdiv}
                </div>
            </div>
        </div>
        )
    }
}


export default LabTests;