const initialState = {
  loggedIn: false,
};

// Action Types
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        loggedIn: true
      };
    case LOG_OUT:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;

// Action Creators

export const logIn = () => {
  return {
    type: LOG_IN
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT
  };
};