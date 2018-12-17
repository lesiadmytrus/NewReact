import HomeContainer from "./Signin";


export const PATHS = Object.freeze({
  INDEX: '/',
//   ITEM_DETAILS: '/items/:id',
  SIGNIN: '/signin', 
  SIGNUP: '/signup',
  LOGOUT: '/Logout'
}); 

export const ROUTES = Object.freeze([
  {
    path: PATHS.INDEX,
    component: HomeContainer
  }
]);
