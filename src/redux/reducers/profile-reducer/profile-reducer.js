import * as TYPES from '../../actions/types/profile_types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  userProfile: null,
};

const profileReducer = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    case TYPES.GET_PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userProfile: payload,
      };
    case TYPES.GET_PROFILE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userProfile: null,
      };
    default:
      return state;
  }
};

export default profileReducer;
