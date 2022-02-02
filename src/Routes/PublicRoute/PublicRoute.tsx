import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Path } from '../../constants/Path';
import { IPropsPublic } from '../../interfaces/usersInterfaces';
import { isAuthenticated } from '../../redux/autorisation/authSelectors';

export const PublicRoute = ({ component: Component }: IPropsPublic) => {
    const isAuth = useSelector(isAuthenticated);

    return isAuth ? <Navigate replace to={Path.USERS} /> : <Component />;
};