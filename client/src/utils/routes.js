import Login from "../pages/login";
import OTP from "../pages/otp";
import Card from "../pages/card";

export const ROUTES = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/verification",
    component: OTP,
  },
  {
    path: "/card",
    component: Card,
  },
];
