import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  
  const { currentUser, isLoading } = useAuth()
  // if(isLoading){
  //   return "Loading...."
  // }

  return (
    <Route
      {...rest}
      render={({ location }) =>
      currentUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;