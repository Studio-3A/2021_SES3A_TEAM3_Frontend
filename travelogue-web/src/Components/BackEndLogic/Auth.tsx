// TODO:
//   -  Work out the best way to provide the user/auth data to children components

import React, { useState } from "react";
import Firebase from "firebase";
import Axios from "axios";
import Params from "./params.json";

// Config
const firebaseConfig = {
    apiKey: "AIzaSyCfZO7BCJviQeD8oqu8-CIuADLkR3LS3gw",
    authDomain: "ses3a-autumn-2021-group-3.firebaseapp.com",
    projectId: "ses3a-autumn-2021-group-3",
    storageBucket: "ses3a-autumn-2021-group-3.appspot.com",
    messagingSenderId: "895809147085",
    appId: "1:895809147085:web:b3489691aa3e732ff11984"
};

// Initialize Firebase
// Try Catch for development as otherwise hot-reload will call initialise app mutliple times
try {
    Firebase.initializeApp(firebaseConfig);
} catch (e) {}
const provider = new Firebase.auth.GoogleAuthProvider();


// TODO:
function Auth({ children }: { children: Array<JSX.Element> }) {

    async function signIn() {
        try {
            const result = await Firebase.auth().signInWithPopup(provider);
            setAuth(result);
        } catch (err) {
            const errorCode = err.code;
            const errorMessage = err.message;
            const email = err.email;
            const credential = err.credential;
            console.log(errorCode, errorMessage, email, credential);
        }
    }
    
    async function validateAuthentication() {
        try {
            const isAuthenticated = await checkToken();
            setIsAuth(isAuthenticated);
        } catch (err) {
            console.error(err);
        }
    };
    
    async function checkToken(): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            try {
                // Contact the backend server (Express) to check if your session is valid
                const result = await Axios.post(`http://${Params.SERVER}/auth/checkToken`, undefined, { headers: { "Firebase-Token": await getToken() } });
                
                if (result.status === 200 && result.data?.authenticated) { // Check Positive Response
                    resolve(true);
                
                } else if (result.status === 401 || result.data?.authenticated === false) { // Check Negative Response
                    resolve(false);
                
                } else { // Server was not able to validate token
                    throw Error(result.data?.error || "Unknown error while checking user token validity.");
                }

            } catch (err) {
                // Throw the error to be handled and displayed in the UI somehow
                reject(err);
            }
        });
    }
    
    function getToken() {
       return Firebase.auth().currentUser?.getIdToken(/* forceRefresh */ true);
    }
    
    async function signOut() {
        try {
            await Firebase.auth().signOut();
        } catch (err) {
            const errorCode = err.code;
            const errorMessage = err.message;
            const email = err.email;
            const credential = err.credential;
            console.log(errorCode, errorMessage, email, credential);
        }
    }

    const [auth, setAuth]: [Firebase.auth.AuthCredential | any, any] = useState(undefined);
    const [isAuth, setIsAuth] = useState(false);
    
    return (
        <div>
            <h1>Test</h1>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signOut}>Sign Out</button>
            <button onClick={validateAuthentication}>Check Token</button>
            <p>Display Name: {auth?.user?.displayName || "Not Signed In"}</p>
            <p>Server isAuthenticated: {isAuth ? "true" : "false"}</p>
            {children}
        </div>
    );
}

export default Auth;