import {
  CHANGE_INPUT_VALUE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from '../constants';

const initialStateSearch = {
  text: '',
};

const initialStateRequestUsers = {
  isPending: false,
  users: [],
  error: '',
};

export const searchUsers = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...initialStateSearch, text: action.payload };
    default:
      return state;
  }
};

export const requestUsers = (state = initialStateRequestUsers, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, users: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};
