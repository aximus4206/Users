import { useEffect, useState } from 'react';
import { fetchUsersRequest } from '../../redux/users/usersActions';
import { useSearchParams } from 'react-router-dom';
import { getUsers } from '../../redux/users/usersSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { defaultFetch, additionalFetch } from '../../UsersApi/apiConfig';
import TableItem from './TableItem/TableItem';

const TableContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const [currentPage, setCurrentPage] = useState(2);
  const [searchParams, setSearchParams] = useSearchParams();
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    if (users.length < defaultFetch.results) {
      dispatch(fetchUsersRequest(defaultFetch));
    }
    if (fetching) {
      setSearchParams(`page=${currentPage}`);
      dispatch(fetchUsersRequest({ page: currentPage, results: additionalFetch }));
      setCurrentPage(prev => prev+1);
      setFetching(false);
    }
  }, [fetching, dispatch, setSearchParams, searchParams, users.length, currentPage ]);
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  const scrollHandler = (event: Event) => {
    const target = (event.target as Document).documentElement;
    if (target.scrollHeight - (target.scrollTop + window.innerHeight) < 1) {
      setFetching(true);
    }
  };

  return <TableItem users={users} />;
};
export default TableContainer;