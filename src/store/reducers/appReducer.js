import {OWNER_ADDRESS_UPDATE, USER_ADDRESS_UPDATE, EVENT_LIST_ADD, IS_ADMIN_UPDATE} from '../actions/actionsConsts';
import initialState from '../initialState';

export default function AppReducer(state = initialState, action) {

    switch(action.type) {
        case OWNER_ADDRESS_UPDATE: 
        return Object.assign({}, state, {
            ownerAddress: action.ownerAddress
          });

        case USER_ADDRESS_UPDATE: 
        return Object.assign({}, state, {
            userAddress: action.userAddress
          });

        case IS_ADMIN_UPDATE: 
        return Object.assign({}, state, {
            isAdmin: action.newUserAddress.toLowerCase() == state.ownerAddress.toLowerCase()
          });

        case EVENT_LIST_ADD: 

        return Object.assign({}, state, {
            eventList: state.eventList.concat(action.value_1)
          })        
        
        default: return state;
    }
}