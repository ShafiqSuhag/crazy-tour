import React from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = React.createContext('');
const AuthProvider = ({ children }) => {
    
    const allContect = useFirebase()
    return (
        <AuthContext.Provider value={allContect}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;