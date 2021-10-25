import { getAuth, onAuthStateChanged } from "@firebase/auth";
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "../components/Login";
import App from "../components/App";
import { useDispatch } from "react-redux";
import { loginEmailPassword } from "../actions/actionLogin";
import { useEffect } from "react";

export default function AppRouter() {
  
    // const dispatch = useDispatch();

    // const [checking, setCecking] = useState(true) //revisando si hya una sesion activa en firebast
    // const [isLoggedIn, setIsLoggedIn] = useState(false) //
    
    
    // useEffect(() => {
    //   const auth= getAuth(); // esta funcion es de firebast si hay una funcion activa, esta autenticada
    //   onAuthStateChanged(auth, (user) =>{ // esta funcion recibe a auth y lo otro q va a campturar lo q esta activo en el momento
    //   if(user?.uid){   //el simbolo de ?
    //     dispatch(loginEmailPassword(user.uid,user.displayName)); //verificar un usuario, con los dos datos
    //     setIsLoggedIn(true);
    //   }else{
    //     setIsLoggedIn(false);
    //   }
    //   setCecking(false);
    // }); 
    // }, [dispatch,setCecking, setIsLoggedIn])
    
    
    // if(checking){
    //   return(
    //     <h1>Espera por favor, estamos cargando los datos</h1>
    //   )
    // }
  
            return (
            <Router>
                <Switch>
                        <Route exact path="/app" components={App} />
                        <Route exact path="/" components={Login} />
                    
                </Switch>
            </Router>
            )
}
