import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/firebaseConfig";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword( email, password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect (()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        loading,
        user,
        createUser,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;