import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../../shared/utility';


const initialState={
    token:null,
    userId:null,
    isVendor:null,
    error:null,
    loading:false,
    authRedirectPath:"/",
    isAuthenticated:false
    // signUpStatus:false
}

const authIsVendor=(state,action)=>{
    return updateObject(state,{isVendor:action.isVendor});
}
const authStart = (state,action)=>{
    return updateObject(state,{error:null,loading:true});
}

const authSuccess =(state,action)=>{
    return updateObject(state,{ 
        token:action.idToken,
        userId: action.userId,
        error:null,
        loading:false
     })
}

const authFail=(state,action)=>{
    return updateObject(state,{
        error: action.error,
        loading:false
    })
}

const authLogout=(state,action)=>{
    return updateObject(state,{
        token:null,
        userId:null
    })
}

// const authSignUpSuccess=(state,action)=>{
//     return updateObject(state,{
//         signUpStatus:true
//     })
// }

// const authSignUpFail=(state,action)=>{
//     return updateObject(state,{
//         signUpStatus:false
//     })
// }

const setAuthRedirectPath = (state,action)=>{
    return updateObject(state,{authRedirectPath:action.path})
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state,action)
        case actionTypes.AUTH_SUCCESS : return authSuccess(state,action)
        case actionTypes.AUTH_FAIL: return authFail(state,action)
        case actionTypes.AUTH_LOGOUT:return authLogout(state,action)
        case actionTypes.SET_AUTH_REDIRECT_PATH:return setAuthRedirectPath(state,action)
        case actionTypes.AUTH_ISVENDOR : return authIsVendor(state,action)
        // case actionTypes.AUTH_SIGNUPSUCCESS : return authSignUpSuccess(state,action)
        // case actionTypes.AUTH_SIGNUPFAIL : return authSignUpFail(state,action)
        default:
            return state;
    }
}

export default reducer;