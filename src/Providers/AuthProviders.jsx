import React from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password, displayName, photoUrl) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                // Set display name and photo URL
                return updateProfile(userCredential.user, {
                    displayName,
                    photoUrl,
                }).then(() => {
                    return userCredential;
                });
            }
        );
    }
    // sing in user
    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log("logged User", loggedUser)
            setLoading(false)
            setUser(loggedUser)
        })
        return () => {
            return unsubscribe()
        }
    }, []);
    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        googleSignIn,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;