// en esta podemos utilizar todo lo q modifiquemos en la tienda como tal derrsto no cmabiaria

import { createStore, combineReducers,compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import loginReducer from "../reducers/loginReducer";
// import { registerReducer } from "../reducers/registerReducer";
// import { productoReducer } from "../reducers/productoReducer";



// esto combila los milwer
const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers= combineReducers({
    login: loginReducer,
    // register: registerReducer,
    // producto: productoReducer, //esto lo tenemos que poner igual en la useSelector
})

export const store = createStore(
    reducers,
    // applyMiddleware esto resive como parametro a trunk que instalamos
    composeEnhancers(applyMiddleware(thunk))
    
)