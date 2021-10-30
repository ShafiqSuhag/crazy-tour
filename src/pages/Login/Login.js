import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const { signInWIthGoogle , setCurrentUser, setError, error} = useFirebase()
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoolgeSignIn = () => {
        console.log('googleSignIn - login page ')
        signInWIthGoogle()
            .then((result) => {
                setCurrentUser(result.user)
                history.replace(from);
            })
            .catch((error) => {
                setError(error.message)
            })
        
    }
    return (
        <div>
            <button onClick={handleGoolgeSignIn}>Google Sign In </button>
            <div>
                {
                    error
                }
            </div>
        </div>
    );
};

export default Login;