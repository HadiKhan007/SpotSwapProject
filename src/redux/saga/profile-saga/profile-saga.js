import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  addChat,
  carInfo,
  editChat,
  quickChats,
  removeChat,
  staticPagesRes,
  updateUserProfile,
  userProfile,
} from '../../../shared/service/ProfileServices';
import * as types from '../../actions/types/profile_types';

// ************* Get Profile Saga **************
export function* getProfileRequest() {
  yield takeLatest(types.GET_PROFILE_REQUEST, getProfile);
}
function* getProfile(params) {
  try {
    const res = yield userProfile(params?.params);
    if (res) {
      yield put({
        type: types.GET_PROFILE_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('Error is ==> ', error);
    yield put({
      type: types.GET_PROFILE_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* Update Profile Saga **************
export function* updateProfileRequest() {
  yield takeLatest(types.UPDATE_PROFILE_REQUEST, updateProfile);
}
function* updateProfile(params) {
  try {
    const res = yield updateUserProfile(params?.params);
    if (res) {
      yield put({
        type: types.UPDATE_PROFILE_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('Error is ==> ', error);
    yield put({
      type: types.UPDATE_PROFILE_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* Get Car Info Saga **************
export function* getCarInfoRequest() {
  yield takeLatest(types.GET_CAR_INFO_REQUEST, getCarInfo);
}
function* getCarInfo(params) {
  try {
    const res = yield carInfo(params?.params);
    if (res) {
      yield put({
        type: types.GET_CAR_INFO_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('Error is ==> ', error);
    yield put({
      type: types.GET_CAR_INFO_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* Update Car Info Saga **************
export function* updateCarInfoRequest() {
  yield takeLatest(types.UPADTE_CAR_INFO_REQUEST, updateCarInfo);
}
function* updateCarInfo(params) {
  try {
    const res = yield carInfo(params?.params);
    if (res) {
      yield put({
        type: types.UPADTE_CAR_INFO_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('Error is ==> ', error);
    yield put({
      type: types.UPADTE_CAR_INFO_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* Get Quick Chats Saga **************
export function* getQuickChatsRequest() {
  yield takeLatest(types.GET_QUICK_CHATS_REQUEST, getQuickChats);
}
function* getQuickChats(params) {
  try {
    const res = yield quickChats(params?.params);
    if (res) {
      yield put({
        type: types.GET_QUICK_CHATS_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('Error is ==> ', error);
    yield put({
      type: types.GET_QUICK_CHATS_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* Add Quick Chat Saga **************
export function* addQuickChatRequest() {
  yield takeLatest(types.ADD_QUICK_CHAT_REQUEST, addQuickChat);
}
function* addQuickChat(params) {
  try {
    const res = yield addChat(params?.params);
    if (res) {
      yield put({
        type: types.ADD_QUICK_CHAT_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('Error is ==> ', error);
    yield put({
      type: types.ADD_QUICK_CHAT_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* Edit Quick Chat Saga **************
export function* editQuickChatRequest() {
  yield takeLatest(types.EDIT_QUICK_CHAT_REQUEST, editQuickChat);
}
function* editQuickChat(params) {
  try {
    const res = yield editChat(params?.params);
    if (res) {
      yield put({
        type: types.EDIT_QUICK_CHAT_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('Error is ==> ', error);
    yield put({
      type: types.EDIT_QUICK_CHAT_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* remove Quick Chat Saga **************
export function* removeQuickChatRequest() {
  yield takeLatest(types.REMOVE_QUICK_CHAT_REQUEST, removeQuickChat);
}
function* removeQuickChat(params) {
  try {
    const res = yield removeChat(params?.params);
    if (res) {
      yield put({
        type: types.REMOVE_QUICK_CHAT_REQUEST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('Error is ==> ', error);
    yield put({
      type: types.REMOVE_QUICK_CHAT_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// ************* Get Static Pages Saga **************
export function* staticPagesRequest() {
  yield takeLatest(types.STATIC_PAGES_REQUEST, staticPages);
}
function* staticPages(params) {
  try {
    const res = yield staticPagesRes(params?.params);
    if (res) {
      yield put({
        type: types.STATIC_PAGES_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log('Error is ==> ', error);
    yield put({
      type: types.STATIC_PAGES_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
