import { Route, Routes } from 'react-router-dom';
import { Path } from '../../constants/Path';
import { Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PublicRoute } from '../../Routes/PublicRoute/PublicRoute';
import { PrivateRoute } from '../../Routes/PrivateRoute/PrivateRoute';

const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const UsersPage = lazy(() => import('../../pages/UsersPage/UsersPage'));
const UserInfoPage = lazy(() => import('../../pages/UserInfoPage/UserInfoPage'));

const RoutesMain = () => {
  return (
    <Suspense fallback={<h1>LOADING</h1>}>
    <Routes>
        <Route path="/" element={<Navigate replace to={Path.LOGIN} />} />
        <Route path={Path.LOGIN} element={<PublicRoute component={LoginPage}/>} />
        <Route path={Path.USERS} element={<PrivateRoute component={UsersPage}/>} />
        <Route path={Path.USER_INFO} element={<PrivateRoute component={UserInfoPage}/>} />
        <Route path={Path.USER_ID} element={<PrivateRoute component={UserInfoPage}/>} />
    </Routes>
    </Suspense>
  );
};
export default RoutesMain;