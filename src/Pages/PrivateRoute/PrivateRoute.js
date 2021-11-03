import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="loading">
            <div className="center">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.uid ?
                children
                : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            }
        />
    );
};

export default PrivateRoute;