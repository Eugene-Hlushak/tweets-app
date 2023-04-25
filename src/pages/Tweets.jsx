import { useEffect, useState } from 'react';
import {
  getAllUsers,
  updateUserFollowers,
  getUsers,
} from '../services/fetchUsers';
import Filter from 'components/Filter/Filter';

import UsersList from '../components/UsersList/UsersList';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [updatedUsers, setUpdatedUsers] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [option, setOption] = useState('all');
  const [page, setPage] = useState(1);

  const filterHandler = e => {
    setOption(e.target.value);
  };

  useEffect(() => {
    const fetchPageUsers = async () => {
      try {
        const result = await getUsers(page);
        setUsers(prev => [...prev, ...result]);

        console.log('result ', result);

        const renewUsers = result.map(user => {
          return { ...user, isFollow: false };
        });
        console.log('renewUsers ', renewUsers);

        // const storageUsers = localStorage.getItem('pageUsers');
        // if (storageUsers) {
        //   localStorage.setItem(
        //     'updUsers',
        //     JSON.stringify([...storageUsers, ...updUsers])
        //   );
        //   setUpdatedUsers(JSON.parse(storageUsers));
        // } else {
        //   localStorage.setItem('pageUsers', JSON.stringify(updUsers));
        //   setUpdatedUsers(() => JSON.parse(localStorage.getItem('pageUsers')));
        // }s
      } catch (error) {}
    };
    fetchPageUsers();
  }, [page]);
  console.log('users ', users);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoad(true);
      try {
        const result = await getAllUsers();

        const updUsers = result.map(user => {
          return { ...user, isFollow: false };
        });

        const storageUsers = JSON.parse(localStorage.getItem('updUsers'));
        if (storageUsers) {
          setUpdatedUsers(storageUsers);
        } else {
          localStorage.setItem('updUsers', JSON.stringify(updUsers));
          setUpdatedUsers(() => JSON.parse(localStorage.getItem('updUsers')));
        }
      } catch (error) {
      } finally {
        setIsLoad(false);
      }
    };
    fetchUsers();
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
    let data;
    !isFollow
      ? (data = { followers: followers + 1 })
      : (data = { followers: followers - 1 });
    try {
      await updateUserFollowers(id, data);
    } catch (error) {}
  };

  const LoadMore = () => {
    setPage(prev => prev + 1);
  };
  return (
    <div>
      <Filter filterHandler={filterHandler} />
      {isLoad ? (
        <div>Loading...</div>
      ) : (
        <>
          <UsersList
            users={updatedUsers}
            toggleFollow={toggleFollow}
            selectedOption={option}
          />
          <button onClick={LoadMore}>LoadMore</button>
        </>
      )}
    </div>
  );
};

export default Tweets;
