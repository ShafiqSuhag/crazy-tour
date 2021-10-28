import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {googleSignIn} = useFirebase()
    const handleGoolgeSignIn = () => {
        console.log('googleSignIn - login page ')
        googleSignIn()
    }
    return (
        <div>
           <button onClick={handleGoolgeSignIn}>Google Sign In </button>
        </div>
    );
};

export default Login;