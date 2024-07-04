import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import counter from "./features/counter"
import fruits from "./features/fruits"
import fruitsCart from "./features/fruitsCart"
import logger from "redux-logger"
import users from "./features/users.js"
import chrono from "./features/chrono.js"

export const store = configureStore({
    reducer: {
        counter, 
        fruits,
        fruitsCart,
        users,
        chrono
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    //     // customMiddleware
    //     // logger
    // )
})

// function customMiddleware(store) {
//     return function(next){
//         return function (action){
//             // console.log(store.getState());
//             // console.log(next);
//             // console.log(action);
//             next({
//                 type: "fruitsCart/addOne",
//                 payload: {
//                     name: "Mango",
//                     url: "/images/mango.jpg",
//                     price: 999,
//                     id: 92435436
//                 }
//             })
//         }
//     }
// }

// Un middleware est un mécanisme qui permet d'intercepter des actions qui va pouvoir effectuer certains effets secondaires