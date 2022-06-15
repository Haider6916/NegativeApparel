/**
 * this file contains all auth actions related to theme settings
 */

import {
  INITIAL_ROUTE,
  INVITE_CODE_SCREEN,
  IS_ALL_INFO_AQUIRED,
  IS_EMAIL_VERIFIED,
  IS_OTP_VERIFIED,
  IS_PASSCODE_CONFIRMED,
  IS_SIGNUP_COMPLETE,
  IS_VALID_USER_ABOUT_INFORMATION,
  SIGNUP_COMPLETE_CODE,
} from '../ACTION_TYPES';

const setOtpVerificationStatus = (status) => {
  return {
    type: IS_OTP_VERIFIED,
    payload: status,
  };
};

const setPasscodeConfirmationStatus = (status) => {
  return {
    type: IS_PASSCODE_CONFIRMED,
    payload: status,
  };
};

const setUserAboutInfoValidity = (status) => {
  return {
    type: IS_VALID_USER_ABOUT_INFORMATION,
    payload: status,
  };
};

const setEmailVerificationStatus = (status) => {
  return {
    type: IS_EMAIL_VERIFIED,
    payload: status,
  };
};

const setInitalRouteName = (data) => {
  return {
    type: INITIAL_ROUTE,
    payload: data,
  };
};
const setAllInfoAquiredStatus = (status) => {
  return {
    type: IS_ALL_INFO_AQUIRED,
    payload: status,
  };
};

const setSignupCompletionStatus = (status) => {
  return {
    type: IS_SIGNUP_COMPLETE,
    payload: status,
  };
};

const setSignUpCompleteCode = (data) => {
  return {
    type: SIGNUP_COMPLETE_CODE,
    payload: data,
  };
};

const isInviteScreen = (data) => {
  return {
    type: INVITE_CODE_SCREEN,
    payload: data,
  };
};

export const onChangeOtpVerificationStatus =
  (status) => (dispatch) => {
    dispatch(setOtpVerificationStatus(status));
  };

export const onChangePasscodeConfirmationStatus =
  (status) => (dispatch) => {
    dispatch(setPasscodeConfirmationStatus(status));
  };

export const onChangeUserAboutInfoStatus =
  (status) => (dispatch) => {
    dispatch(setUserAboutInfoValidity(status));
  };

export const onChangeEmailVerificationStatus =
  (status) => (dispatch) => {
    dispatch(setEmailVerificationStatus(status));
  };

export const onChangeAllIfoAquiredStatus =
  (status) => (dispatch) => {
    dispatch(setAllInfoAquiredStatus(status));
  };

export const onChangeSignupCompletionStatus =
  (status) => (dispatch) => {
    dispatch(setSignupCompletionStatus(status));
  };

export const onResetRegistration = () => (dispatch) => {
  dispatch(setInitalRouteName(''));
  dispatch(onChangeOtpVerificationStatus(false));
  dispatch(onChangePasscodeConfirmationStatus(false));
  dispatch(onChangeUserAboutInfoStatus(false));
  dispatch(onChangeEmailVerificationStatus(false));
  dispatch(onChangeAllIfoAquiredStatus(false));
};

export const onSetInitalRouteName = (status) => (dispatch) => {
  dispatch(setInitalRouteName(status));
};

export const onSetSignupCompleteCode =
  (data) => (dispatch) => {
    dispatch(setSignUpCompleteCode(data));
  };

export const onSetInviteScreen = (data) => (dispatch) => {
  dispatch(isInviteScreen(data));
};
