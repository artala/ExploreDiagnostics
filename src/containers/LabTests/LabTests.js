import React,{Component} from 'react';
import {connect} from 'react-redux';

import PageLayout from '../../hoc/PageLayout/PageLayout';
import Input from '../../components/UI/Input/Input';
import Classes from './LabTests.css';
import Button from '../../components/UI/Button/Button';
import {updateObject,checkValidity} from '../../shared/utility';
import LabTest from '../../components/Labtest/Labtest';
import * as testActions from '../../store/actions/index';

class LabTests extends Component{
    state={
        controls:{
            search: {
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
    addTestHandlerLocal=(event)=>{
        event.preventDefault()
        let test=this.state.controls.search.value
        let price=this.state.controls.price.value
        if(test!=='' & price !==''){
            this.setState({controls:{
                ...this.state.controls,
                search:{...this.state.controls.search,value:''},
                price:{...this.state.controls.price,value:''}
            }})
            this.props.addTestHandler(test,price)
           }
    }
    
    componentDidMount(){
        this.props.getTestsHandler()
    }

    render(){
        let labtestsdiv=<div>No Tests Available</div>
        if (this.props.labTests != null){
            let labTestsKeysList=Object.keys(this.props.labTests)
            labtestsdiv=labTestsKeysList.map(labTestKey=>(
                <LabTest
                        key={labTestKey}
                        test={this.props.labTests[labTestKey].test}
                        price={this.props.labTests[labTestKey].price}/>
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
                    <form onSubmit={this.addTestHandlerLocal}>
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

const mapStateToProps = state =>{
    return{
        labTests:state.testsStore.tests
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getTestsHandler : ()=>dispatch(testActions.fetchTestsAsync()),
        addTestHandler : (test,price)=>dispatch(testActions.addTests(test,price))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LabTests);