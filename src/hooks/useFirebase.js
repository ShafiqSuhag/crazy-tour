import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import firebaseInit from '../firebase/firebase.init';




firebaseInit()
const useFirebase = () => {

    const [error, setError] = useState('')
    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleSignIn = () => {
        console.log('googleSignIn - fireabse page ')
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log('user data - ', result.user)
                setUser(result.user)

                // ...
            }).catch((error) => {
                console.error("error google user ", error)
                setError(error)
            });
    }



    // oAuth Status Change Handle 
    onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
        //   setUser({})
        }
      });

    // signOut 
    
    const logOut = ()=> {
        signOut(auth).then(() => {
            console.log('logout successfull')
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            console.log('logout error')
            // An error happened.
        });
    }
    
    

    return { 
        user, 
        error,
        googleSignIn, 
        logOut
     }

};

export default useFirebase;