import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IUserProps } from '../../../interfaces/usersInterfaces';
import styles from './UserInfoItem.module.scss';

const UserInfoItem = ({ user }: IUserProps) => {
  const { t } = useTranslation();
  const userBirthdate = useMemo(
    () => new Date(user.dob.date).toLocaleDateString(),
    [user.dob.date],
  );

  return (
    <div className={`${styles.userBox}`}>
      <img
        className={styles.userInfo__photo}
        src={user.picture.large}
        width="250"
        height="250"
        alt="User"
      />
      <div className={styles.userBox__info}>
        <p>
          <b>{t('users_name')}</b> {`${user.name.first} ${user.name.last}`}
        </p>
        <p>
          <b>{t('users_birthdate')}</b>
          {userBirthdate}
        </p>
        <p>
          <b>{t('users_sex')}</b>
          {user.gender}
        </p>
        <p>
          <b>{t('users_adress')}</b>
          {user.location.city}
        </p>
        <p>
          <b>{t('users_phone')}</b>
          {user.phone}
        </p>
      </div>
    </div>
  );
};

export default UserInfoItem;