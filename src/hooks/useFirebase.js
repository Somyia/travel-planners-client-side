
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from '../Firebase/firebase.init';

firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        }, []);

    })
    return { user, signInWithGoogle, logOut };
}

export default useFirebase;