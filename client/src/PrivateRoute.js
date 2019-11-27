import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { useAuth } from "./context/auth";

import AdminDashboard from './views/AdminDashboard/AdminDashboard';
import NotFound from "./views/NotFound"


function PrivateRoute({ component: Component, ...rest }) {
    const isAuthenticated = useAuth();

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect to="/login" />
                    )
            }
        />
    );
}
export default PrivateRoute;

