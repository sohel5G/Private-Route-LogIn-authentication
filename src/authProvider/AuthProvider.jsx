import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../firebaseAuthConfig/FirebaseAuthConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, pass )
    }
    const signInUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const userProfileUpdate = name => {
        return updateProfile(auth.currentUser, name)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, data => {
            setUser(data)
            setLoading(false)
        });

        return () => {
            unSubscribe();
        }

    }, [])

    const authInfo = { user, createUser, signInUser, logOut, loading, userProfileUpdate, setUser }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

