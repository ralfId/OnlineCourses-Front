import { types } from "../../types/types";

const initState = {
  isCheckin: true,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        ...action.payload,
        isCheckin: false,
      };
    case types.logout:
        return{
            isCheckin: false
        }
    case types.update:
      return{
        ...state,
        ...action.payload,
        isCheckin: false
      }
    case types.finishChecking:
      return {
        ...action.state,
        isCheckin: false
      }

    default:
      return state
  }
};
