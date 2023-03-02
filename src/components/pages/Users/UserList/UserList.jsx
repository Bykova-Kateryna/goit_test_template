import { useEffect, useState } from 'react';
import UserItem from '../UserItem/UserItem';
import scss from './UserList.module.scss';

const UserList = ({ allUser }) => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const usersInLocal = JSON.parse(localStorage.getItem('users'));
    if (usersInLocal) {
      return setUser(usersInLocal);
    }
    setUser(allUser);
    return localStorage.setItem('users', JSON.stringify(allUser));
  }, [allUser]);

  const handleChangeFollow = id => {
    const newUsers = users.map(user => {
      if (user.id === id) {
        user.follow = !user.follow;
      }
      return user;
    });
    return localStorage.setItem('users', JSON.stringify(newUsers));
  };

  return (
    <ul className={scss.user__list}>
      {users.map(user => (
        <UserItem
          key={user.id}
          userInfo={user}
          following={handleChangeFollow}
        />
      ))}
    </ul>
  );
};

export default UserList;
