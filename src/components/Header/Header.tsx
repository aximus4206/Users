import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Path } from '../../constants/Path';
import { isAuthenticated } from '../../redux/autorisation/authSelectors';
import styles from './Header.module.scss';
import { LanguageBlock } from './LanguageBlock/LanguageBlock';
import HeaderNav from './HeaderNav/HeaderNav';

function Header() {
  const loggedIn = useSelector(isAuthenticated);
  return (
    <header>
      <div className={styles.container}>
        <NavLink to={Path.USERS}>
          <img
            className={styles.logo}
            src={Path.IMAGE_LOGO}
            title=""
            alt="LOGO"
          />
        </NavLink>
        <LanguageBlock />
        {loggedIn && (
          <HeaderNav />
        )}
      </div>
    </header>
  );
}

export default Header;
