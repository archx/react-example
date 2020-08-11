import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 *  私有化路由
 * @param param0 
 */
const PrivateRoute: React.FC<{path?: string, isAuth?: boolean}> = ({isAuth = false, children, ...rest }) => {
    console.log('isAuth ->', isAuth);
    return (
        <Route {...rest} render={props => (
            isAuth ? (children) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
        )}
        />
    )
}

export default PrivateRoute