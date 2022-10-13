import * as TYPES from '../types/auth_types';

//Login Action
export const loginRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.LOGIN_REQUEST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Social Login Action
export const socialLoginRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SOCIAL_LOGIN_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Update Social Profile Action
export const updateSocialProfileReq = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPDATE_SOCIAL_PROFILE_REQ,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Sign Up Action
export const signUpRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SIGNUP_REQUEST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Get Car Specs Action
export const getCarSpecsRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_CAR_SPECS_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Create Car Profile Action
export const createCarProfileRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.CAR_PROFILE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Forgot Password Action
export const forgotPassRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.FORGOT_PASSWORD_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Verify OTP Action
export const verifyOTPRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.OTP_VERIFY_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Resend OTP Action
export const resendOTPRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.RESEND_OTP_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Reset Password Action
export const resetPassRequest = (route, params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.RESET_PASSWORD_REQUEST,
    route,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Logout Action
export const logoutRequset = (params, callBack) => {
  return {
    type: TYPES.LOGOUT_REQUEST_REQUEST,
    params,
    callBack,
  };
};
