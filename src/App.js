import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
// import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';

import SignUpDashboard from './containers/SignUp/SignUp';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';
import Labtests from './containers/LabTests/LabTests';
import CustomerOrders from './components/CustomerOrders/CustomerOrders';
import VendorOrders from './components/VendorOrders/VendorsOrders';
import SignInOTP from './components/SignIn/SignInOTP';
import VendorProfile from './containers/VendorProfile/VendorProfile';
import HomePage from './containers/HomePage/HomePage'


// const asyncAuth = asyncComponent(()=>{
//   return import('./containers/Auth/Auth')
// })

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  
  render () {
    let routes = (
      <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/SignIn" exact component={SignIn}/>
          <Route path="/SignUp" exact component={SignUpDashboard}/>
          <Route path="/UserSignUp" exact component={SignUp}/>
          <Route path="/VendorSignUp" exact component={SignUp}/>
          <Route path="/Labtests" exact component={Labtests}/>
          <Route path="/customerOrders" exact component={CustomerOrders}/>
          <Route path="/vendorOrders" exact component={VendorOrders}/>
          <Route path="/signInOTP" exact component={SignInOTP}/>
          <Route path="/vendorProfile" exact component={VendorProfile}/>
      </Switch>
    );
    // if(this.props.isAuthenticated){
    //   routes=(
    //   <Switch>
    //     <Route path="/" exact  />
    //    </Switch>
    //   )
    // }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div> 
    );
  }
}

const mapStatetoprops = state =>{
  return{
    isAuthenticated : state.auth.token !== null
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignup : ()=>dispatch(actions.authCheckState())
  }
}
export default withRouter(connect(mapStatetoprops,mapDispatchToProps)(App));
