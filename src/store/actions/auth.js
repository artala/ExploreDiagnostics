import * as actionTypes from './actionTypes';
import axios from 'axios';
import axiosBase from '../../axios-orders'

export const authStart = () =>{
    return {
        type:actionTypes.AUTH_START
    }
}

export const authIsVendor = (isVendor)=>{
    return{
        type: actionTypes.AUTH_ISVENDOR,
        isVendor:isVendor
    }
}

export const authStoreUser = (user)=>{
    return{
        type:actionTypes.AUTH_STOREUSER,
        user:user
    }
}

export const authSuccess = (token,userId)=>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    }
}

// export const authSignUpSuccess = ()=>{
//     return{
//         type:actionTypes.AUTH_SIGNUPSUCCESS
//     }
// }

// export const authSignUpFail = (error)=>{
//     return{
//         type:actionTypes.AUTH_SIGNUPFAIL,
//         error:error
//     }
// }

export const authFail = (error)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

// export const logout=()=>{
//     localStorage.removeItem('token');
//     localStorage.removeItem('expirationDate')
//     localStorage.removeItem('userId')
//     return{
//         type:actionTypes.AUTH_LOGOUT
//     }
// }


// export const checkAuthTimeOut = (expirationTime)=>{
//     return dispatch=>{
//         setTimeout(()=>{
//             dispatch(logout())
//         },expirationTime*1000)
//     }
// }
// export const authStore = ()=>{
//     return dispatch=>{
//         axiosBase.post('/users.json')
//         .then(response=>{
//             console.log(response.data)
//             dispatch(authStoreUser(user))
//                         })
//         .catch(err=>console.log(err))
//     }
// }

export const authSignUp=(user,category)=>{
    return dispatch=>{
        console.log(user.email,user.password)
        dispatch(authStart());
        const authData = {
                email:user.email,
                password:user.password,
                returnSecureToken:true 
            }
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAeHFn7NQ4nDeLKgj8jJatyN-bhVT2a8mM',authData)  
        .then(response=>{
            const userDetails={...user,category:category,userId:response.data.idToken}
            axiosBase.post('/users.json',userDetails)
            // .then(response=>{
            //     dispatch(authSignUpSuccess())
            // })
            // .catch(err=>{
            //     dispatch(authSignUpFail(err))
            // })
            
        })
        .catch(err=>{
            console.log(err)
            dispatch(authFail(err))
        })  
    }
}


export const authSignIn=(user)=>{
    return dispatch=>{
        dispatch(authStart());
        const authData = {
                email:user.email,
                password:user.password,
                returnSecureToken:true 
            }
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAeHFn7NQ4nDeLKgj8jJatyN-bhVT2a8mM',authData)  
        .then(response=>{
                        dispatch (authSuccess(response.data.idToken,response.data.localId));
        })
        .catch(err=>{
            console.log(err)
            dispatch(authFail(err))
        })  
    }
}

// export const auth=(email,password , isSignUp)=>{
//     return dispatch=>{
//         dispatch(authStart());
//         const authData = {
//             email:email,
//             password:password,
//             returnSecureToken:true 
//         }
//         let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAc1qUClTGhuw9srhnWkOGPrcDUNDA5hig'
//         if(!isSignUp){
//             url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAc1qUClTGhuw9srhnWkOGPrcDUNDA5hig'
//         }
//         axios.post(url,authData)
//             .then( response=>{
//                 const expirationDate = new Date(new Date().getTime() + response.data.expiresIn *1000)
//                 // console.log(new Date().getTime());
//                 localStorage.setItem('token',response.data.idToken)
//                 localStorage.setItem('expirationDate',expirationDate)
//                 localStorage.setItem('userId',response.data.localId)
//                 dispatch(authSuccess(response.data.idToken,response.data.localId))
//                 dispatch(checkAuthTimeOut(response.data.expiresIn))
//             })
//             .catch(err=>{
//                 console.log(err.response);
//                 dispatch(authFail(err.response.data.error))
//             })
//     }
// }

export const setAuthRedirectPath = (path) =>{
    return{
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}

// export const authCheckState = () =>{
//     return dispatch=>{
//         const token = localStorage.getItem('token');
//         if(!token){
//             dispatch(logout())
//         }
//         else{
//             const expirationDate=new Date(localStorage.getItem('expirationDate'))
//             if (expirationDate <= new Date()){
//                     dispatch(logout())
//             }else{
//                 const userId= localStorage.getItem('userId')
//                 dispatch(authSuccess(token,userId))
//                 dispatch(checkAuthTimeOut((expirationDate.getTime()- new Date().getTime())/1000))
//             }
//         }
//     }
// }