import Firebase from 'firebase/app';
import 'firebase/auth';
import config from './config';

// Initialize Firebase
// Try Catch for development as otherwise hot-reload will call initialise app mutliple times
try {
    const firebase = Firebase.initializeApp(config.firebase);
} catch (e) {}

export const Providers = {
    google: new Firebase.auth.GoogleAuthProvider(),
    facebook: new Firebase.auth.FacebookAuthProvider()
}

export const auth = Firebase.auth();
export default Firebase;
