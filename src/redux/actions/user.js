import {
  DEEP_LINK_TYPE,
  SET_CURRENT_USER,
  SET_FORGET_TOKEN,
  SET_FULLNAME_TOKEN,
  SET_USER_FORGET_DETAILS,
  SET_USER_LOGIN_DETAILS,
  SET_USER_PROFILE_DETAILS,
  STORE_REGISTRATION_DATA,
  TEMP_EMAIL_FOR_DEEP_LINK,
  TEMP_TOKEN_FOR_CHANGE_BUSNISEMAIL,
} from '../ACTION_TYPES';
import {
  CurrentUserDetailsTypes,
  ProfileDetailsTypes,
  userForgetDetailsType,
  UserLoginDetailTypes,
  forgetApiTokenType,
  deepLinkTypes,
  storeRegistrationDataType,
} from '../types';

const setUserProfileDetails = (details) => {
  return {
    type: SET_USER_PROFILE_DETAILS,
    payload: details,
  };
};

const setCurrentUserDetails = (details) => {
  return {
    type: SET_CURRENT_USER,
    payload: details,
  };
};

const setUserLoginDetails = (details) => {
  return {
    type: SET_USER_LOGIN_DETAILS,
    payload: details,
  };
};

const setUserForgetDetails = (details) => {
  return {
    type: SET_USER_FORGET_DETAILS,
    payload: details,
  };
};

const setForgetApiToken = (details) => {
  return {
    type: SET_FORGET_TOKEN,
    payload: details,
  };
};

const setFullNameApiToken = (details) => {
  return {
    type: SET_FULLNAME_TOKEN,
    payload: details,
  };
};

const setDeepLinkType = (details) => {
  return {
    type: DEEP_LINK_TYPE,
    payload: details,
  };
};

const setStoreRegistrationData = (details) => {
  return {
    type: STORE_REGISTRATION_DATA,
    payload: details,
  };
};

const setTempEmailForDeepLink = (details) => {
  return {
    type: TEMP_EMAIL_FOR_DEEP_LINK,
    payload: details,
  };
};
const setTempTokenForChangeEmail = (details) => {
  return {
    type: TEMP_TOKEN_FOR_CHANGE_BUSNISEMAIL,
    payload: details,
  };
};

export const onSetUserProfileDetails =
  (details) => (dispatch) => {
    dispatch(setUserProfileDetails(details));
  };

export const onSetCurrentUserDetails =
  (details) => (dispatch) => {
    dispatch(setCurrentUserDetails(details));
  };

export const onSetUserLoginDetails =
  (details) => (dispatch) => {
    dispatch(setUserLoginDetails(details));
  };

export const onSetUserForgetDetails =
  (details) => (dispatch) => {
    dispatch(setUserForgetDetails(details));
  };

export const onSetForgetToken =
  (details) => (dispatch) => {
    dispatch(setForgetApiToken(details));
  };
export const onSetFullNameApiToken =
  (details) => (dispatch) => {
    dispatch(setFullNameApiToken(details));
  };

export const onSetDeepLinkType =
  (details) => (dispatch) => {
    dispatch(setDeepLinkType(details));
  };
export const onSetStoreRegistrationData =
  (details) => (dispatch) => {
    dispatch(setStoreRegistrationData(details));
  };

export const onSetTempEmailForDeepLink =
  (details) => (dispatch) => {
    dispatch(setTempEmailForDeepLink(details));
  };

export const onSetTempTokenForChangeEmail =
  (details) => (dispatch) => {
    dispatch(setTempTokenForChangeEmail(details));
  };
