import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../pages/Login/Login';

export default function RequireAuth(WrappedComponent) {
    const loggedIn = useSelector(state => state.auth.loggedIn);
    return function (props) {
        if (loggedIn) {
            return <WrappedComponent {...props} />;
        }
        return <Login />;
    };
}