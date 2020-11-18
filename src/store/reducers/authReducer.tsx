import { ActionTypes, LoginAction, LogoutAction, SignUpAction } from '../actions/actionTypes';

export const initState = {
  authError: null
};

export const authReducer = (state = initState, action: LoginAction|LogoutAction|SignUpAction) => {
  switch (action.type) {
    case ActionTypes.loginSuccess:
      return {
        ...state,
        authError: action.payload.err
      };
    case ActionTypes.loginError:
      return {
        ...state,
        authError: action.payload.err
      };
    case ActionTypes.logoutSuccess:
      return {
        ...state,
        authError:action.payload.err
      }
    case ActionTypes.signUpSuccess:
      return{
        ...state,
        authError:action.payload.err
      }
    case ActionTypes.signUpError:
      return {
        ...state,
        authError: action.payload.err
      }
    default:
      return state;
  }
}