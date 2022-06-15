/**
 * this file contains all redux actions related to language settings
 */

import {
  DEEP_LINK_HANDLER,
  IS_INVITE_DEEP_LINK,
  IS_USER_LOGGING_IN_FOR_FIRST,
  USER_FOUND_ON_DEVICE,
  ID_VERIFICATION_DATA,
} from '../ACTION_TYPES';

import { deepLinkHandlerType, IdentityVeficationType } from '../types';

const setUserLoggingInTimeState = (state) => {
  return {
    type: IS_USER_LOGGING_IN_FOR_FIRST,
    payload: state,
  };
};

const setUserFoundStatusOnDevice = (state) => {
  return {
    type: USER_FOUND_ON_DEVICE,
    payload: state,
  };
};

const setDeepLinkHandler = (state) => {
  return {
    type: DEEP_LINK_HANDLER,
    payload: state,
  };
};

const setInviteDeepLinkData = (state) => {
  return {
    type: IS_INVITE_DEEP_LINK,
    payload: state,
  };
};

const setIdVerificationData = (state) => {
  return {
    type: ID_VERIFICATION_DATA,
    payload: state,
  };
};

export const onSetUserLoggingInTimeState =
  (state) => (dispatch) => {
    dispatch(setUserLoggingInTimeState(state));
  };

export const onUserFoundStatusOnDevice =
  (state) => async (dispatch) => {
    await dispatch(setUserFoundStatusOnDevice(state));
  };

export const onSetDeepLinkHandler =
  (state) => (dispatch) => {
    dispatch(setDeepLinkHandler(state));
  };

export const onSetInviteDeepLinkData =
  (state) => (dispatch) => {
    dispatch(setInviteDeepLinkData(state));
  };

export const onSetIdVerificationData =
  (state) => (dispatch) => {
    dispatch(setIdVerificationData(state));
  };
