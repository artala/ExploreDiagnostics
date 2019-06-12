import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility'

const initialState = {
    tests:null
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_TESTS:
            return updateObject(state,{tests:action.tests});            
        default:
            return state;
    }
}

export default reducer;