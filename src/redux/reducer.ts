import { LOGIN, LOGOUT } from './actionType';
import { combineReducers, Action } from 'redux';
import { LoginAccount } from '../interfaces';


interface ReduxState {
    account: LoginAccount
}

const defaultState = {
    account: {
        username: ""
    }
}

/**
 *  登录
 * @param state 
 * @param action 
 */
const login = (state: ReduxState = defaultState, action: Action & { data: LoginAccount }) => {
    switch (action.type) {
        case LOGIN:
            return { account: action.data }
        case LOGOUT:
            return { account: { username: "" } }
        default:
            return state
    }
}


export const reducers = combineReducers({ login })