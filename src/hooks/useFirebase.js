import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import firebaseInit from '../firebase/firebase.init';




firebaseInit()
const useFirebase = () => {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed);
    // useEffect(() => {
        
    // }, [])

    const [error, setError] = useState('')
    const [currentUser, setCurrentUser] = useState({})

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInWIthGoogle = () => {
        console.log('googleSignIn - fireabse page ')
        return signInWithPopup(auth, googleProvider)
            // .then((result) => {

            //     // setUser(result.user)
            //     console.log('user data - ',today.toUTCString(), currentUser)

            //     // ...
            // }).catch((error) => {
            //     console.error("error google user ", error)
            //     setError(error)
            // });
    }



    // oAuth Status Change Handle 
    onAuthStateChanged(auth, (user) => {


        // console.log('onAuthStateChanged', today.toUTCString(), user, typeof(user), currentUser)
        if (user) {
            setCurrentUser(user)
        } else {
            // setCurrentUser({})
        }
    });

    // signOut 

    const logOut = () => {
        console.log('logout auth', auth)
        return signOut(auth)
        // .then(() => {
        //     console.log('logout successfull')
        //     // Sign-out successful.
        //     // setUser({});
        //     setCurrentUser({})
        //     // console.log("after logout -", today.toUTCString(), currentUser)
        // }).catch((error) => {
        //     console.log('logout error', error)
        //     // An error happened.
        // });
    }



    return {
        currentUser,
        setCurrentUser,
        error,
        setError,
        signInWIthGoogle,
        logOut
    }

};

export default useFirebase;