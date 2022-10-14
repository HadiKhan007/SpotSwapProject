const BASE_URL = 'https://housibly.herokuapp.com/api/v1/';
const CHAT_URL = 'ws://housibly.herokuapp.com/cable?';

const ENDPOINTS = {
  // Auth endpoints
  LOGIN: 'authentication/login',
  SOCIAL_LOGIN: 'social_logins/social_login',
  SOCIAL_USER: 'users/update_user',
  REGISTER: 'authentication/sign_up',
  CAR_SPECS: 'authentication/get_car_specification',
  CAR_PROFILE: 'authentication/create_car_profile',
  FORGOT_PASS: 'reset_passwords/send_otp',
  VERIFY_OTP: 'reset_passwords/verify_otp',
  RESEND_OTP: 'reset_passwords/resend_otp',
  RESET_PASS: 'reset_passwords/reset_password',
  LOGOUT: 'authentication/logout', //
  // Profile endpoints
  GET_PROFILE: 'users/get_user',
  UPDATE_PROFILE: 'users/update_user',
  GET_CAR_IFNO: 'authentication/get_car_profile',
  UPDATE_CAR_INFO: 'authentication/update_car_profile',
  QUICK_CHATS: 'quick_chats/get_all_quick_chat',
  ADD_CHAT: 'quick_chats/create_quick_chat',
  EDIT_CHAT: 'quick_chats/update_quick_chat',
  REMOVE_CHAT: 'quick_chats/${id}/delete_quick_chat',
};

export {BASE_URL, ENDPOINTS, CHAT_URL};
