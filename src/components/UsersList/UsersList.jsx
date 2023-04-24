import { useEffect, useState } from 'react';
import { getUsers } from '../../services/fetchUsers';
import { List } from './UsersList.styled';
import UserCard from '../UserCard/UserCard';

const UsersList = () => {
  // const [users, setUsers] = useState([]);

  const [updatedUsers, setUpdatedUsers] = useState([]);

  useEffect(() => {
    const users = async () => {
      const result = await getUsers();
      const updUsers = result.map(user => {
        return { ...user, isFollow: false };
      });

      const storageUsers = localStorage.getItem('updUsers');
      if (storageUsers) {
        setUpdatedUsers(JSON.parse(storageUsers));
      } else {
        localStorage.setItem('updUsers', JSON.stringify(updUsers));
        setUpdatedUsers(() => JSON.parse(localStorage.getItem('updUsers')));
      }
    };
    users();
  }, []);

  return (
    <List>
      {updatedUsers.length > 0 &&
        updatedUsers.map(
          ({ name, id, avatar, tweets, followers, isFollow }) => (
            <UserCard
              key={id}
              name={name}
              id={id}
              avatar={avatar}
              tweets={tweets}
              followers={followers}
            />
          )
        )}
    </List>
  );
};

export default UsersList;
