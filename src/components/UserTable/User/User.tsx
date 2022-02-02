import { IUserProps } from '../../../interfaces/usersInterfaces';
import styles from './User.module.scss';
import { NavLink } from 'react-router-dom';
import { Path } from '../../../constants/Path';
import UserItem from '../UserItem/UserItem';

const User = ({user}: IUserProps) => {
  return (
    <div className={`${styles.person} ${styles[user.gender]}`}>
        <NavLink
            className={styles.person__link}
            to={`${Path.USER_INFO}/${user.login.uuid}`}>
          <UserItem user={user}/>
        </NavLink>
    </div>
  );
}; 
export default User;
