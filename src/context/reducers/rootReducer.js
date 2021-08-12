import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { snackBarReducer } from "./snackBarReducer";
import { menuReducer } from "./menuReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  snackBar: snackBarReducer,
  menu: menuReducer,
});
