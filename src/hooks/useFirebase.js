
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from '../Firebase/firebase.init';

firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)

    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setIsLoading(false)
            }
            else {
                setUser({})
                setIsLoading(false)
            }

        })

    }, []);
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }


    return { user, setIsLoading, isLoading, signInWithGoogle, logOut };
}

export default useFirebase;