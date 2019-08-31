import * as AuthActionTypes from '../actions/types/auth';

const initialState = {
  phone: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // USER REGISTRATION
    case AuthActionTypes.AUTH_USER_REGISTER_STARTED:
      return {
        ...state,
        phone: action.payload.phone,
        loading: true,
        error: null,
      };
    case AuthActionTypes.AUTH_USER_REGISTER_SUCCEED:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case AuthActionTypes.AUTH_USER_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
