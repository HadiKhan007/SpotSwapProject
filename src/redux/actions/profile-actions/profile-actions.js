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
