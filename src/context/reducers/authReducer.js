import { types } from "../../types/types";

const initState = {
  isAuthenticated: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case types.logout:
        return{
            isAuthenticated: false
        }
    default:
      return state
  }
};
