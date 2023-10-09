import { createContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile,signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading] = useState(null)
    const [photo,setPhoto] = useState(null)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log("Current User from useEffect : ", currentUser);
        })

        return ()=>unSubscribe();
    },[])

    // update user
    const updateUserInfo = (name,photoUrl) =>{
        {photoUrl && setPhoto(photoUrl)}
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoUrl
          })
    }

    // sign in

    const logIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo={
        user,
        createUser,
        loading,
        updateUserInfo,
        logIn,
        logOut,
        photo,googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;