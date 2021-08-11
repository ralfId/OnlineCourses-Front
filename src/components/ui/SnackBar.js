import React from "react";
import { Snackbar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { closeSnackBar } from "../../actions/ui";
import { Alert } from "@material-ui/lab";

export const SnackBarApp = () => {
  const dispatch = useDispatch();
  const { message, isOpen, severity } = useSelector((state) => state.snackBar);

  const handleClose = () => {
      dispatch(closeSnackBar());
  }
  
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleClose} color="inherit">
            <Alert onClose={handleClose} severity={severity}>
                {message}
            </Alert>
      </Snackbar>
    </>
  );
};
