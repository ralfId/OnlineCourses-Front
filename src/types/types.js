export const types = {
  /* AUTH REDUCER */
  login: "[auth Login] Login",
  logout: "[auth Logout] Logout",
  update: "[auth Update] Update user",
  finishChecking: "[auth checking] Finish checking",

  /* SNACKBAR REDUCER */

  openSnackBar: "[snackBar] Open",
  closeSnackBar: "[snackBar] Close",

  /* MENU REDUCER */
  openHamburgerMenu: "[menu] Hamburguer menu open",
  closeHamburgerMenu: "[menu] Hamburguer menu closed",
  openDropdownMenu: "[menu] Dropdown menu open",
  closeDropdownMenu: "[menu] Dropdown menu closed",
  menuLogout: '[menu] Menu logout',

  /* COURSES REDUCER */

  coursesPagination: "[courses] Get courses pagination",
  coursesLogout: "[courses] Clean courses reducer"
};
