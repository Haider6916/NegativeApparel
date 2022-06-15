import {
  SET_PARENT_ROUTE_FOR_CREATE_PASSCODE,
  SET_PARENT_ROUTE_FOR_OTP_NAVIGATION,
} from '../ACTION_TYPES';

const initialState = {
  parentRouteForOtpVerification: '',
  parentRouteForCreatePasscode: '',
};

const navigationRoutesReducer = (
  state = initialState,
  action = {},
) => {
  switch (action.type) {
    case SET_PARENT_ROUTE_FOR_OTP_NAVIGATION:
      return {
        ...state,
        parentRouteForOtpVerification: action.payload,
      };

    case SET_PARENT_ROUTE_FOR_CREATE_PASSCODE:
      return {
        ...state,
        parentRouteForCreatePasscode: action.payload,
      };

    default:
      return state;
  }
};

export default navigationRoutesReducer;
