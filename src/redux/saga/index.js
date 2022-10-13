import {fork} from 'redux-saga/effects';

// Auth Requests
import {
  loginRequest,
  socialLoginRequest,
  updateSocialProfileReq,
  signUpRequest,
  getCarSpecsRequest,
  createCarProfileRequest,
  forgotPassRequest,
  OTPVerifyRequest,
  resendOTPRequestSaga,
  resetPassRequest,
  logoutRequestSaga,
} from './auth-saga/auth-saga';

// Profile Requests
import {getProfileRequest} from './profile-saga/profile-saga';

export function* rootSaga() {
  // Auth Requests
  yield fork(loginRequest);
  yield fork(socialLoginRequest);
  yield fork(updateSocialProfileReq);
  yield fork(signUpRequest);
  yield fork(getCarSpecsRequest);
  yield fork(createCarProfileRequest);
  yield fork(forgotPassRequest);
  yield fork(OTPVerifyRequest);
  yield fork(resendOTPRequestSaga);
  yield fork(resetPassRequest);
  yield fork(logoutRequestSaga);
  // Profile Requests
  yield fork(getProfileRequest);
}
