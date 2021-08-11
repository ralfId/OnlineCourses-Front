import { types } from "../../types/types";

const initState = {
    message : '',
    severity: '',
    isOpen: false
}

export const snackBarReducer = (state = initState, action) => {
    
    switch (action.type) {
        case types.openSnackBar:
            return{
                ...state,
                message: action.payload.message,
                severity: action.payload.severity,
                isOpen: true
            }
        case types.closeSnackBar:
            return {
                ...state,
                isOpen: false
            }
    
        default:
            return initState
    }
}
