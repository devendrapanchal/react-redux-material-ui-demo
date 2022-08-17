import * as types from "./action-type";

const initialstate = {
  users: [],
  user: {},
  lodding: true,
};

const usersReducers = (state = initialstate, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        lodding: false,
      };
    case types.DELETE_USER:
      return {
        ...state,
        lodding: false,
      };
    case types.ADD_USER:
      return {
        ...state,
        lodding: false,
      };

    default:
      return state;
  }
};

export default usersReducers;
