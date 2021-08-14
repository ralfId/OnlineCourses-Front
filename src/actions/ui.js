import { types } from "../types/types";

export const openSnackBar = (message, severity ='') => {
  /*
  severity: success | error | info | warning
 */

  return {
    type: types.openSnackBar,
    payload: { message, severity },
  };
};

export const closeSnackBar = () => ({
  type: types.closeSnackBar,
});
