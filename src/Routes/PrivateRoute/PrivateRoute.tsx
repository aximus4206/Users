import { Path } from '../../constants/Path';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../../redux/autorisation/authSelectors';
import { IPropsPrivate } from '../../interfaces/usersInterfaces';

export const PrivateRoute = ({ component: Component, path }: IPropsPrivate) => {
    const isAuth = useSelector(isAuthenticated);

    path = path || Path.LOGIN;

    return isAuth ? <Component /> : <Navigate to={path} />;
};