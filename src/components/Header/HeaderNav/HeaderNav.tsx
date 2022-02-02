import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Path } from '../../../constants/Path';
import { logoutRequest } from '../../../redux/autorisation/authActions';
import styles from './HeaderNav.module.scss';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

function HeaderNav() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(logoutRequest());
    localStorage.clear();
  }, [dispatch]);
  return (
    <nav className={styles.menu}>
      <ul>
      <li>
          <NavLink to={Path.USERS}>{t('header_users')}</NavLink>
      </li>
      <li>
          <NavLink to={Path.USER_INFO}>{t('user_info')}</NavLink>
      </li>
      <li>
          <NavLink to={Path.LOGIN}>
          <button className={styles.logout} onClick={logout}>
              {t('logout')}
          </button>
          </NavLink>
      </li>
    </ul>
    </nav>
  );
}

export default HeaderNav;