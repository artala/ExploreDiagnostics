import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aux from '../Auxi/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import NavigationTopArea from '../../components/Navigation/NavigationTopArea/NavigationTopArea'

class Layout extends Component {
    state = {
        showSideDrawer: false,
        showDropDown:false
    }

    sideDrawerClosedHandler = () => {
        console.log("sideDrawerClosedHandler")
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        console.log("sideDrawerToggleHandler")
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    dropDownToggleHandler = () => {
        console.log("dropDownToggleHandler")
        this.setState( ( prevState ) => {
            return { showDropDown: !prevState.showDropDown };
        } );
    }

    render () {
        return (
            <Aux>
                <NavigationTopArea isAuth={this.props.isAuthenticated}/> 
                <Toolbar 
                isAuth={this.props.isAuthenticated} 
                drawerToggleClicked={this.sideDrawerToggleHandler}
                dropDownStatus={this.state.showDropDown}
                clicked={this.dropDownToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    dropDownStatus={this.state.showDropDown}
                    clicked={this.dropDownToggleHandler}/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStatetoProps=(state)=>{
    return{
        isAuthenticated: state.auth.token !== null
    }
}
export default connect(mapStatetoProps)(Layout);