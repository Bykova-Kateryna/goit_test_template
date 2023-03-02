import scss from './UserContent.module.scss';
import users from '../../../helpers/users.json';
import UserList from '../UserList/UserList';

const UserContent = () => {
  return (
    <section className={scss.user__content__container}>
      <h1 className={scss.user__content__title}>users</h1>
      <UserList allUser={users} />
    </section>
  );
};

export default UserContent;
