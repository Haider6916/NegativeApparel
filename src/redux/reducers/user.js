import {
  SET_CURRENT_USER,
  SET_FORGET_TOKEN,
  SET_USER_FORGET_DETAILS,
  SET_USER_LOGIN_DETAILS,
  SET_USER_PROFILE_DETAILS,
  SET_FULLNAME_TOKEN,
  DEEP_LINK_TYPE,
  STORE_REGISTRATION_DATA,
  TEMP_EMAIL_FOR_DEEP_LINK,
  TEMP_TOKEN_FOR_CHANGE_BUSNISEMAIL,
} from '../ACTION_TYPES';
import {ActionTypes, UserReducerInitialStateTypes} from '../types';

const initialState: UserReducerInitialStateTypes = {
  profileDetails: null,
  currentUser: null,
  userLoginDetails: null,
  userForgetDetails: null,
  forgetApiToken: null,
  fullNameApiToken: null,
  deepLinkType: null,
  storeRegistrationData: null,
  tempEmailForDeepLinkCall: null,
  tempTokenForEmailChange: null,
};

const userReducer = (
  state: object = initialState,
  action: ActionTypes = {},
) => {
  switch (action.type) {
    case SET_USER_PROFILE_DETAILS:
      return {
        ...state,
        profileDetails: action.payload,
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case SET_USER_LOGIN_DETAILS:
      return {
        ...state,
        userLoginDetails: action.payload,
      };
    case SET_USER_FORGET_DETAILS:
      return {
        ...state,
        userForgetDetails: action.payload,
      };
    case SET_FORGET_TOKEN:
      return {
        ...state,
        forgetApiToken: action.payload,
      };
    case SET_FULLNAME_TOKEN:
      return {
        ...state,
        fullNameApiToken: action.payload,
      };
    case DEEP_LINK_TYPE:
      return {
        ...state,
        deepLinkType: action.payload,
      };
    case STORE_REGISTRATION_DATA:
      return {
        ...state,
        storeRegistrationData: action.payload,
      };
    case TEMP_EMAIL_FOR_DEEP_LINK:
      return {
        ...state,
        tempEmailForDeepLinkCall: action.payload,
      };
    case TEMP_TOKEN_FOR_CHANGE_BUSNISEMAIL:
      return {
        ...state,
        tempTokenForEmailChange: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
