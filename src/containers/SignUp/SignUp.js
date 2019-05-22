import React,{Component} from 'react';
import PageLayout from '../../hoc/PageLayout/PageLayout'
import SignUpTile from '../../components/SignUp/SignUpTile/SignUpTile'
import Classes from './SignUp.css'
import {faPaintBrush , faGlobe} from '@fortawesome/free-solid-svg-icons'

class SignUp extends Component{ 
    render(){
        return(
            <div>
            <PageLayout 
            Heading="SIGNUP"
            Subtitle1="Home"
            Subtitle2="Sign Up"/>
            <div className={Classes.container}>
                <div className={Classes.row}>
                    <SignUpTile icon={faPaintBrush} title="Vendor" clicked="/VendorSignUp"/>
                    <SignUpTile icon={faGlobe} title="User" clicked="UserSignUp"/>
                </div>
            </div>
            
        </div>
        )
    }
}

export default SignUp;