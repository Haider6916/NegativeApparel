/**
 * this file contains all auth actions related to theme settings
 */

import {
  SET_PARENT_ROUTE_FOR_CREATE_PASSCODE,
  SET_PARENT_ROUTE_FOR_OTP_NAVIGATION,
} from '../ACTION_TYPES';

const setParentRouteForOtpVerification = (status) => {
  return {
    type: SET_PARENT_ROUTE_FOR_OTP_NAVIGATION,
    payload: status,
  };
};

const setParentRouteForCreatePasscode = (status) => {
  return {
    type: SET_PARENT_ROUTE_FOR_CREATE_PASSCODE,
    payload: status,
  };
};

export const onSetParentRouteForOtpVerification =
  (route) => (dispatch) => {
    dispatch(setParentRouteForOtpVerification(route));
  };

export const onSetParentRouteForCreatePasscode =
  (route) => (dispatch) => {
    dispatch(setParentRouteForCreatePasscode(route));
  };
