// This file is adapted from https://usehooks.com/useAuth/ with added TS support + providers
import { useState, useEffect, useContext, createContext, FC } from "react";
import Firebase from 'firebase/app';
import { auth } from './firebase';
import Axios from "axios";
import Params from "../Components/BackEndLogic/params.json";

export interface AuthContext {
  user: Firebase.User | null,
  signIn: (provider: Firebase.auth.AuthProvider) => Promise<Firebase.User | null>,
  signOut: () => Promise<void>,
  getToken: () => Promise<string>,
  checkToken: () => Promise<boolean>,
}

const defaultContext: AuthContext = {
  user: null,
  signIn: () => Promise.reject("Not Implemented"),
  signOut: () => Promise.reject("Not Implemented"),
  getToken: () => Promise.reject("Not Implemented"),
  checkToken: () => Promise.reject("Not Implemented"),
};
const authContext = createContext<AuthContext>(defaultContext);

// FC = React Functional Component
export const ProvideAuth: FC = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState<Firebase.User | null>(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signIn = (provider: Firebase.auth.AuthProvider) => {
    return auth.signInWithPopup(provider).then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signOut = () => {
    return auth.signOut().then(() => {
        setUser(null);
    });
  };

  const getToken = () => {
    return auth.currentUser?.getIdToken(/* forceRefresh */ true) || Promise.reject("User is not logged in.");
  }

  const checkToken: () => Promise<boolean> = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // Contact the backend server (Express) to check if your session is valid
            const token =  await getToken();
            const options = { headers: token ? { "Firebase-Token": token } : {} }
            const result = await Axios.post(`${Params.SERVER}/auth/checkToken`, undefined, options);
            
            if (result.status === 200) { // Check Positive Response
                resolve(true);
            
            } else if (result.status === 401) { // Check Negative Response
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
    
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signIn,
    signOut,
    getToken,
    checkToken,
  };
}