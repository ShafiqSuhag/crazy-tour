import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const { signInWIthGoogle, setCurrentUser, setError, error,setIsLoading  } = useAuth()
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoolgeSignIn = () => {
        console.log('googleSignIn - login page ')
        signInWIthGoogle()
            .then((result) => {
                setCurrentUser(result.user)
                setIsLoading(false)
                history.replace(from);
            })
            .catch((error) => {
                setIsLoading(true)
                setError(error.message)
            })

    }
    return (
        <div>
            <div className="w-full h-96 flex items-center justify-center">
                <button  class="btn btn-accent" onClick={handleGoolgeSignIn}>Google Sign In </button>
                
            </div>
            <div>
                {
                    error
                }
            </div>
        </div>
    );
};

export default Login;