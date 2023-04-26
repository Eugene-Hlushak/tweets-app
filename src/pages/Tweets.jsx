import { useEffect, useState } from 'react';
import {
  getAllUsers,
  updateUserFollowers,
  getUsers,
} from '../services/fetchUsers';
import { PageContainer, TweetsContainer, LoadMoreBtn } from './Pages.styled';
import Filter from 'components/Filter/Filter';
import UsersList from '../components/UsersList/UsersList';
import Spinner from 'components/Spinner/Spinner';

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
      } catch (error) {}
    };

    fetchPageUsers();
  }, [page]);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoad(true);
      try {
        const result = await getAllUsers();

        const updUsers = result.map(user => {
          return { ...user, isFollow: false };
        });

        const savedUsers = JSON.parse(localStorage.getItem('updUsers'));
        if (savedUsers) {
          setUpdatedUsers(savedUsers);
        } else {
          localStorage.setItem('updUsers', JSON.stringify(updUsers));
          setUpdatedUsers(JSON.parse(localStorage.getItem('updUsers')));
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
    setUpdatedUsers(JSON.parse(localStorage.getItem('updUsers')));
    await updateUser(id, followers, isFollow);
  };

  const updateUser = async (id, followers, isFollow) => {
    const data = !isFollow
      ? { followers: followers + 1 }
      : { followers: followers - 1 };
    try {
      await updateUserFollowers(id, data);
    } catch (error) {}
  };

  const LoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <PageContainer>
      {isLoad ? (
        <Spinner />
      ) : (
        <TweetsContainer>
          
          <Filter filterHandler={filterHandler} />
          <UsersList
            users={users}
            updatedUsers={updatedUsers}
            toggleFollow={toggleFollow}
            selectedOption={option}
          />
          <LoadMoreBtn onClick={LoadMore}>LoadMore</LoadMoreBtn>
        </TweetsContainer>
      )}
    </PageContainer>
  );
};

export default Tweets;
