import { useEffect, useState } from 'react';
import { getUsers, updateUserFollowers } from '../services/fetchUsers';

import UsersList from '../components/UsersList/UsersList';

const Tweets = () => {
  // const [users, setUsers] = useState([]);
  const [updatedUsers, setUpdatedUsers] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  // const [isUserUpd, setIsUserUpd] = useState(false);

  useEffect(() => {
    const users = async () => {
      setIsLoad(true);
      try {
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
      } catch (error) {
      } finally {
        setIsLoad(false);
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
    // setIsUserUpd(true);
    let data;
    !isFollow
      ? (data = { followers: followers + 1 })
      : (data = { followers: followers - 1 });
    try {
      await updateUserFollowers(id, data);
    } catch (error) {
      // } finally {
      // setIsUserUpd(false);
    }
  };

  return (
    <div>
      {isLoad ? (
        <div>Loading...</div>
      ) : (
        <UsersList users={updatedUsers} toggleFollow={toggleFollow} />
      )}
    </div>
  );
};

export default Tweets;
