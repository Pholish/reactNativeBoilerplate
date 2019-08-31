import * as actionTypes from './types/auth';

/*
 * Decsription
 *
 * @param {String} param | Description
 *
 * @return {Object}
 */
export const userVerifyPhoneNumber = param => {
  return {
    type: actionTypes.AUTH_USER_VERIFY_PHONE_NUMBER,
    payload: {
      param,
    },
  };
};

export default userVerifyPhoneNumber;
