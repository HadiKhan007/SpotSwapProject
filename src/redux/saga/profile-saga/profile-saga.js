import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {userProfile} from '../../../shared/service/ProfileServices';
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
