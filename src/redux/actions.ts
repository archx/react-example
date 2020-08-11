import { LOGIN, LOGOUT } from './actionType';
import { LoginAccount } from '../interfaces';

export const loginAction = (value: LoginAccount) => ({type: LOGIN, data: value})
export const logoutAction = (value?: any) => ({type: LOGOUT})