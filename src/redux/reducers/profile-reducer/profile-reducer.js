import * as TYPES from '../../actions/types/profile_types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  userProfile: null,
  carInfo: null,
  quickChats: null,
  staticPage: null,
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
    case TYPES.UPDATE_PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        userProfile: payload,
      };
    case TYPES.UPDATE_PROFILE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        userProfile: null,
      };
    case TYPES.GET_CAR_INFO_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        carInfo: payload,
      };
    case TYPES.GET_CAR_INFO_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        carInfo: null,
      };
    case TYPES.UPADTE_CAR_INFO_REQUEST_SUCCESS:
      return { 
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        carInfo: payload,
      };
    case TYPES.UPADTE_CAR_INFO_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        carInfo: null,
      };
    case TYPES.GET_QUICK_CHATS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        quickChats: payload,
      };
    case TYPES.GET_QUICK_CHATS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
        quickChats: null,
      };
    case TYPES.ADD_QUICK_CHAT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.ADD_QUICK_CHAT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.EDIT_QUICK_CHAT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.EDIT_QUICK_CHAT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.REMOVE_QUICK_CHAT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.REMOVE_QUICK_CHAT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.STATIC_PAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        staticPage: payload,
      };
    case TYPES.STATIC_PAGES_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
        staticPage: null,
      };
    default:
      return state;
  }
};

export default profileReducer;
