import { useMemo } from 'react';
import { IUserProps } from '../../../interfaces/usersInterfaces';
import styles from './UserItem.module.scss';


const UserItem = ({ user }: IUserProps) => {
  const userBirthdate = useMemo(() => new Date(user.dob.date).toLocaleDateString(), [user.dob.date]);
  return (
    <div className={`${styles.person} ${styles[user.gender]}`}>
      <div className={styles.photo_container}>
        <img
          className={styles.person__photo}
          src={user.picture.large}
          alt="User"
          width="120"
          height="120"
        />
      </div>
      <p
        className={styles.person__name}
      >{`${user.name.first} ${user.name.last}`}</p>
      <p className={styles.person__birthday}>
        {userBirthdate}
      </p>
      <p className={styles.person__gender}>{user.gender}</p>
    </div>
  );
};

export default UserItem;
