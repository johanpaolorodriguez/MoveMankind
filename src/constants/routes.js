export const LANDING = "/";
export const STARTUPS = "/startups";
export const SIGN_UP = "/signup";
export const SIGN_IN = "/signin";
export const HOME = "/home";
export const ACCOUNT = "/account";
export const ADMIN = "/admin";
export const PASSWORD_FORGET = "/pw-forget";

export const ITEMS = [
  { name: "Landing", href: LANDING, current: false, restricted: false },
  { name: "Startups", href: STARTUPS, current: false, restricted: true },
  { name: "Home", href: HOME, current: false, restricted: true },
  { name: "Account", href: ACCOUNT, current: false, restricted: true },
  { name: "Admin", href: ADMIN, current: false, restricted: true },
  { name: "Sign In", href: SIGN_IN, current: false, restricted: false },
  { name: "Sign Up", href: SIGN_UP, current: false, restricted: false },
];
