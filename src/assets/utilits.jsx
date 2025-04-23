import * as Yup from "yup";
import { createContext } from "react";

 export const validationSchema = Yup.object({
       email: Yup.string()
           .required("Не введена електроннаа адреса")
           .email("Некоректна електронна адреса")
   });
    
export const ROUTES = {
    home: "/",
    achievements: "/achievements",
    foodcourt: "/foodcourt",
    map: "/map",
    nearestrestaurants: "/nearestrestaurants",
    restaurants: "/restaurants",
    specialities: "/specialities",
    login: "/login",
    bascket: "/bascket",
    notfoundpage: "*",
};


const InitialLogin = {
    login: false,
    onLogin: function () { },
};

export const LoginContext = createContext(InitialLogin);