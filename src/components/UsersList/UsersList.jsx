import { useEffect, useState } from 'react';
import { getUsers } from '../../services/fetchUsers';
import { List } from './UsersList.styled';
import UserCard from '../UserCard/UserCard';

const UsersList = ({ users, toggleFollow }) => {
  // const [updatedUsers, setUpdatedUsers] = useState([]);

  // // забираю всіх юзерів, додаю їх в localStorage і модифікую новим значенням isFollow,
  // // а також з ціих модифікованих відмальовую розмітку

  // useEffect(() => {
  //   const users = async () => {
  //     const result = await getUsers();
  //     const updUsers = result.map(user => {
  //       return { ...user, isFollow: false };
  //     });

  //     const storageUsers = localStorage.getItem('updUsers');
  //     if (storageUsers) {
  //       setUpdatedUsers(JSON.parse(storageUsers));
  //     } else {
  //       localStorage.setItem('updUsers', JSON.stringify(updUsers));
  //       setUpdatedUsers(() => JSON.parse(localStorage.getItem('updUsers')));
  //     }
  //   };
  //   users();
  // }, []);

  return (
    <List>
      {users.length > 0 &&
        users.map(user => (
          <UserCard key={user.id} user={user} toggleFollow={toggleFollow} />
        ))}
    </List>
  );
};

export default UsersList;
