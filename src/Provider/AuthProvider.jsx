import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../CustomHook/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })

    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser)
            if (currentUser) {
                // get token and store client
                const employInfo = { email: currentUser.email };
                console.log(employInfo);
                await axiosPublic.post('/jwt', employInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else {
                // remove token
                localStorage.removeItem('access-token')
            }
            console.log(currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])
    const authInfo = {
        loading,
        user,
        createUser,
        login,
        logOut,
        googleLogin,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;