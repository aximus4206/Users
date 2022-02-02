import User from '../User/User';
import { IUsers } from '../../../interfaces/usersInterfaces';
import styles from './TableItem.module.scss';

const TableItem = ({users}: IUsers) => {
  return (
    <div className={styles.user_table}>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};
export default TableItem;