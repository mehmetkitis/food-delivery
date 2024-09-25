import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathName: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;