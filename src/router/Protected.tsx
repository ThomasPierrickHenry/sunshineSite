import { Navigate } from 'react-router-dom';
import { ReactNode, Fragment } from 'react';

type Props = { children: ReactNode };

const ProtectedRoute = (props: Props): ReactNode => {
    const user = true;

    return user ? <Fragment>{props.children}</Fragment> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;