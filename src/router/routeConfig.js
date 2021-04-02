// public routes
import Login from "container/login";
import SignUp from "container/signup";
import {Shubham} from "../components/"
}
 

//private routes


export const publicRoutes = [




    {
        key: "login",
        path: "/login",
        component: Login,
        exact: true
      },
      {
        key: "signUp",
        path: "/signUp",
        component: SignUp,
        exact: true
      }
  
];

export const privateRoutes = [
  
];
