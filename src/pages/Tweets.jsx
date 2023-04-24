import { useEffect, useState } from 'react';
import { getUsers, updateUserFollowers } from '../services/fetchUsers';

import UsersList from '../components/UsersList/UsersList';

const Tweets = () => {
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

  const toggleFollow = async (id, followers, isFollow) => {
    const updFollowers = JSON.parse(localStorage.getItem('updUsers')).map(
      user =>
        user.id === id
          ? {
              ...user,
              isFollow: !user.isFollow,
              followers: user.isFollow
                ? user.followers - 1
                : user.followers + 1,
            }
          : user
    );
    localStorage.setItem('updUsers', JSON.stringify(updFollowers));
    setUpdatedUsers(() => JSON.parse(localStorage.getItem('updUsers')));
    await updateUser(id, followers, isFollow);
  };

  const updateUser = async (id, followers, isFollow) => {
    console.log(followers);
    let data;
    !isFollow
      ? (data = { followers: followers + 1 })
      : (data = { followers: followers - 1 });

    await updateUserFollowers(id, data);
  };

  return (
    <div>
      <UsersList users={updatedUsers} toggleFollow={toggleFollow} />
    </div>
  );
};

export default Tweets;
