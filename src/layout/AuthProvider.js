import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    //create new user
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //log in user
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sing in with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }


    //Facebook sign in
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }


    //update user name & photo
    const userUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state changed', currentUser)
            setuser()
        })

        return () => {

            unSubscribe()
        }
    }, [])
    // catch up user when user left page


    const authValue = { user, createNewUser, logIn, userUpdate, googleSignIn, facebookSignIn }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;