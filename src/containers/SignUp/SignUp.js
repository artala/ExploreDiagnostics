import React,{Component} from 'react';
import PageLayout from '../../hoc/PageLayout/PageLayout'
import SignUpTile from '../../components/SignUp/SignUpTile/SignUpTile'
import Classes from './SignUp.css'
import {faPaintBrush , faGlobe} from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'

class SignUp extends Component{ 
    isVendorHandler=(isVendor)=>{
        this.props.isVendorHandler(isVendor)
        if(isVendor===true){
        console.log('Hai Vendor')
            this.props.history.push('/VendorSignUp')
        }
        else{
            
        console.log('Hai User')
            this.props.history.push('/UserSignUp')
        }
    }
    render(){
        return(
            <div>
            <PageLayout 
            Heading="SIGNUP"
            Subtitle1="Home"
            Subtitle2="Sign Up"/>
            <div className={Classes.container}>
                <div className={Classes.row}>
                    <SignUpTile icon={faPaintBrush} title="Vendor" clicked={()=>this.isVendorHandler(true)}/>
                    <SignUpTile icon={faGlobe} title="User" clicked={()=>this.isVendorHandler(false)}/>
                </div>
            </div>
            
        </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        isVendorHandler : (isVendor)=>dispatch(actions.authIsVendor(isVendor))
    }
}

export default connect(null,mapDispatchToProps)(SignUp);