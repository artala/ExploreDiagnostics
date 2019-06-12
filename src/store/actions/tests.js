import * as actionTypes from './actionTypes'
import axios from '../../axios-orders';

export const fetchTests = (tests)=>{
    return{
        type: actionTypes.FETCH_TESTS,
        tests:tests
    }
}

export const addTests = (test,price)=>{
    const newTest={
        test:test,
        price:price
    }
    return dispatch =>{
        axios.post('/labtests.json',newTest)
        .then(response=>{dispatch(fetchTestsAsync())})
        .catch(error=>console.log(error))
    }
}

export const fetchTestsAsync =()=>{
    return dispatch=>{
        axios.get('https://explore-diagnostics.firebaseio.com/labtests.json')
        .then(response=>{
            dispatch(fetchTests(response.data))
        })
    }
}