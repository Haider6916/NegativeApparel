import {
  IS_ALL_INFO_AQUIRED,
  IS_EMAIL_VERIFIED,
  IS_OTP_VERIFIED,
  IS_PASSCODE_CONFIRMED,
  IS_SIGNUP_COMPLETE,
  IS_VALID_USER_ABOUT_INFORMATION,
  INITIAL_ROUTE,
  SIGNUP_COMPLETE_CODE,
  INVITE_CODE_SCREEN,
} from '../ACTION_TYPES';

const initialState = {
  isOtpVerified: false,
  isPasscodeConfirmed: false,
  isValidUserAboutInfo: false,
  isEmailVerified: false,
  initialRouteName: '',
  isAllInfoAcquired: false,
  isSignupComplete: false,
  SignUpCompleteCode: null,
  inviteCodeScreen: true,
};

const authReducer = (
  state = initialState,
  action = {},
) => {
  switch (action.type) {
    case IS_OTP_VERIFIED:
      return {
        ...state,
        isOtpVerified: action.payload,
      };

    case IS_PASSCODE_CONFIRMED:
      return {
        ...state,
        isPasscodeConfirmed: action.payload,
      };

    case IS_VALID_USER_ABOUT_INFORMATION:
      return {
        ...state,
        isValidUserAboutInfo: action.payload,
      };

    case IS_EMAIL_VERIFIED:
      return {
        ...state,
        isEmailVerified: action.payload,
      };

    case INITIAL_ROUTE:
      return {
        ...state,
        initialRouteName: action.payload,
      };
    case IS_ALL_INFO_AQUIRED:
      return {
        ...state,
        isAllInfoAcquired: action.payload,
      };

    case IS_SIGNUP_COMPLETE:
      return {
        ...state,
        isSignupComplete: action.payload,
      };
    case SIGNUP_COMPLETE_CODE:
      return {
        ...state,
        SignUpCompleteCode: action.payload,
      };
    case INVITE_CODE_SCREEN:
      return {
        ...state,
        inviteCodeScreen: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
