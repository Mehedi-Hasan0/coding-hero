import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/Firebase';


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // sign Up function
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in function
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google 
    const loginWithGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // sign in with github 
    const loginWithGithub = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // sign out function
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // update user function
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // user data holding observer/function
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currentUser', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        loginWithGoogle,
        loginWithGithub,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;