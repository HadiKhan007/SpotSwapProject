import * as TYPES from '../types/profile_types';

//Get Profile
export const getProfileRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_PROFILE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Update Profile Request
export const updateProfileRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPDATE_PROFILE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Get car info
export const getCarInfoRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_CAR_INFO_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//update car info
export const updateCarInfoRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPADTE_CAR_INFO_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Get quick chats
export const getQuickChatsRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_QUICK_CHATS_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

//Add quick chat
export const addQuickChatRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.ADD_QUICK_CHAT_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Edit quick chat
export const editQuickChatRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.EDIT_QUICK_CHAT_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Remove quick chat
export const removeQuickChatRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.REMOVE_QUICK_CHAT_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Get static pages data
export const staticPagesRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.STATIC_PAGES_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
