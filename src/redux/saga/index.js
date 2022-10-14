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
import {
  getProfileRequest,
  updateProfileRequest,
  getCarInfoRequest,
  updateCarInfoRequest,
  getQuickChatsRequest,
  addQuickChatRequest,
  editQuickChatRequest,
  removeQuickChatRequest,
} from './profile-saga/profile-saga';

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
  yield fork(updateProfileRequest);
  yield fork(getCarInfoRequest);
  yield fork(updateCarInfoRequest);
  yield fork(getQuickChatsRequest);
  yield fork(addQuickChatRequest);
  yield fork(editQuickChatRequest);
  yield fork(removeQuickChatRequest);
}
