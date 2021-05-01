// TODO:
//   -  Work out the best way to provide the user/auth data to children components

import React, { useState } from 'react';
import FirebaseTesting from 'firebase';
import Axios from 'axios';
import Params from './params.json';
import Firebase from '../../firebase/firebase';

// TODO:
function Auth({ children }: { children: Array<JSX.Element> }) {
  async function signIn(provider: any) {
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
  }

  async function checkToken(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        // Contact the backend server (Express) to check if your session is valid
        const token = await getToken();
        const options = { headers: token ? { 'Firebase-Token': token } : {} };
        const result = await Axios.post(
          `${Params.SERVER}/auth/checkToken`,
          undefined,
          options
        );

        if (result.status === 200) {
          // Check Positive Response
          resolve(true);
        } else if (result.status === 401) {
          // Check Negative Response
          resolve(false);
        } else {
          // Server was not able to validate token
          throw Error(
            result.data?.error ||
              'Unknown error while checking user token validity.'
          );
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

  const [auth, setAuth]: [
    FirebaseTesting.auth.AuthCredential | any,
    any
  ] = useState(undefined);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <h1>Test</h1>
      <p>
        <a href={`${Params.SERVER}/graphql`}>GraphQL Playground</a>
      </p>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signOut}>Sign Out</button>
      <button onClick={validateAuthentication}>Check Token</button>
      <p>Display Name: {auth?.user?.displayName || 'Not Signed In'}</p>
      <p>Server isAuthenticated: {isAuth ? 'true' : 'false'}</p>
      {children}
    </div>
  );
}

export default Auth;
