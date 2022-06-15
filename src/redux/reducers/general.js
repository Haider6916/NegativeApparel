import {
  DEEP_LINK_HANDLER,
  IS_USER_LOGGING_IN_FOR_FIRST,
  USER_FOUND_ON_DEVICE,
  IS_INVITE_DEEP_LINK,
  ID_VERIFICATION_DATA,
} from '../ACTION_TYPES';

const initialState = {
  isUserLoggingInForFirst: true,
  isUserFoundOnDevice: false,
  deepLinkHandler: null,
  isInviteDeepLink: null,
  identityVerificationData: null,
};

const generalReducer = (
  state = initialState,
  action = {},
) => {
  switch (action.type) {
    case IS_USER_LOGGING_IN_FOR_FIRST:
      return {
        ...state,
        isUserLoggingInForFirst: action.payload,
      };
    case USER_FOUND_ON_DEVICE:
      return {
        ...state,
        isUserFoundOnDevice: action.payload,
      };
    case DEEP_LINK_HANDLER:
      return {
        ...state,
        deepLinkHandler: action.payload,
      };
    case IS_INVITE_DEEP_LINK:
      return {
        ...state,
        isInviteDeepLink: action.payload,
      };
    case ID_VERIFICATION_DATA:
      return {
        ...state,
        identityVerificationData: action.payload,
      };

    default:
      return state;
  }
};

export default generalReducer;
