import * as AuthActionTypes from '../actions/types/auth';

const initialState = {
  isAuth: false,
  token: null,
  tokenExpired: null,
  user: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // USER LOGIN
    case AuthActionTypes.AUTH_USER_LOGIN_STARTED:
      return {
        ...state,
        isAuth: false,
        token: null,
        tokenExpired: null,
        user: null,
        loading: true,
        error: null,
      };
    case AuthActionTypes.AUTH_USER_LOGIN_SUCCEED:
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        tokenExpired: action.payload.tokenExpired,
        user: action.payload.user,
        loading: false,
        error: null,
      };
    case AuthActionTypes.AUTH_USER_LOGIN_FAILED:
      return {
        ...state,
        isAuth: false,
        token: null,
        tokenExpired: null,
        user: null,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
