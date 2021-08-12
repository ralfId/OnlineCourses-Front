import { types } from "../../types/types";

const initState = {
    isHamburgerMenuOpen: false,
    isDropdownMenuOpen: false
}

export const menuReducer = (state = initState, action) => {
    
    switch (action.type) {
        case types.openHamburgerMenu:
            return{
                ...state,
                isHamburgerMenuOpen: true
            }
        case types.closeHamburgerMenu:
            return{
                ...state,
                isHamburgerMenuOpen: false
            }
        case types.openDropdownMenu:
            return{
                ...state,
                isDropdownMenuOpen: true
            }
        case types.closeDropdownMenu:
            return{
                ...state,
                isDropdownMenuOpen: false
            }
        default:
            return state
    }
}
