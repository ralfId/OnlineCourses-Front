import { types } from "../types/types";

export const openHamburgerMenu = () => ({
  type: types.openHamburgerMenu,
});

export const closeHamburgerMenu = () => ({
  type: types.closeHamburgerMenu,
});

export const openDropdownMenu = () => ({
  type: types.openDropdownMenu,
});

export const closeDropdownMenu = () => ({
  type: types.closeDropdownMenu,
});
