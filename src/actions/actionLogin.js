import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth";
import { types } from "../types/types";
import { google, facebook } from "../firebase/firebaseConfig";


export const loginEmailPassword = (email,password) => {
    return (dispatch)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(({user})=>{

            dispatch(loginSincrono(user.uid,user.displayName))
            console.log('bienevenido señor usuario')
            
        })
        .catch(e => {
            // console.log(e)
            console.log('el usuario no existe')
        })
    }
}

export const loginFacebook =()=>{
    return(dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth, facebook)// popup para iniciar la sesion en google
        .then(({user})=>{ 
            dispatch(loginSincrono(user.uid, user.displayName))
        }).catch(error=>console.log(error))
    }
}


export const loginGoogle =()=>{
    return(dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth, google)// popup para iniciar la sesion en google
        .then(({user})=>{ 
            dispatch(loginSincrono(user.uid, user.displayName))
        }).catch(error=>console.log(error))
    }
}

export const loginSincrono = (id, displayname) => {
    return {
        type: types.login,
        payload:{
            id,
            displayname
        }
    }
}

export const logout = () => {
    return (dispatch)=>{
        const auth =getAuth();
        signOut(auth)
        .then(user =>{
            dispatch(logoutSincrono())
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

export const logoutSincrono = () => {
    return {
       type: types.logout,
    }
}





// import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth";
// import Swal from "sweetalert2";
// import { google, facebook } from "../firebase/firebaseConfig";
// import {types} from "../types/types";


// export const loginEmailPassword = (email,password) =>{
    
//     return (dispatch) =>{

//        const auth = getAuth();
//         signInWithEmailAndPassword(auth,email,password)
//        .then(({user}) =>{
       
//        })
//        .catch(e =>{
//             console.log(e);

//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: '!Algo salió mal!',
//                 footer: 'Usuario o Contraseña invalidos'
//             })
//        })
//     }
// }
// const auth = getAuth();

// export const loginGoogle = () => {

//     return(dispatch) => {
       
//         signInWithPopup(auth,google)
//         .then(({user}) => {
//           dispatch(loginSincrono(user.uid,user.displayName, user.email, user.photoURL))
//         })
//         .catch(e =>{
//             console.log(e);
//         })
//     }
// }


// export const loginFacebook = () => {

//     return(dispatch) => {
       
//         signInWithPopup(auth,facebook)
//         .then(({user}) => {
//           dispatch(loginSincrono(user.uid,user.displayName, user.email, user.photoURL))
//         })
//         .catch(e =>{
//             console.log(e);
//         })
//     }
// }

// export const loginSincrono = (id,displayname, email, photoURL) => {

//     return{
//        type: types.login,
//        payload: {
//            id,
//            displayname,
//            photoURL,
//            email
//            }
//     }
// }

// //logout

// // export const logout = () => {
// //     return async(dispatch) => {
// //         const auth = getAuth();
// //             await signOut(auth);
// //             dispatch(logoutSincrono());

// //     }
// // }


// // export const logoutSincrono = () => {
// //    return{
// //        type: types.logout,
// //    }
// // }


