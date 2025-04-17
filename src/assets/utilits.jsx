import * as Yup from "yup";
import { createContext } from "react";

 export const validationSchema = Yup.object({
       email: Yup.string()
           .required("Не введена електроннаа адреса")
           .email("Некоректна електронна адреса")
   });
    
export const ROUTES = {
    home: "/",
    achievements: "achievements",
    foodcourt: "foodcourt",
    map: "map",
    nearestrestaurants: "nearestrestaurants",
    restaurants: "restaurants",
    specialities: "specialities",
    notfoundpage: "*",
    login: "login",
    bascket: "bascket"
};

export const LoginContext = createContext(null);