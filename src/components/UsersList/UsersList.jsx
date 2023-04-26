import { useRef, useEffect } from 'react';
import { List } from './UsersList.styled';
import UserCard from '../UserCard/UserCard';
import smoothScroll from 'services/smoothScroll';

const UsersList = ({
  users,
  updatedUsers,
  toggleFollow,
  selectedOption,
  page,
}) => {
  const listRef = useRef();

  useEffect(() => {
    if (page === 1) {
      return;
    }
    smoothScroll(listRef.current);
  });

  const filterUsers = (users, option) => {
    if (option === 'all') return users;
    if (option === 'follow') return users.filter(({ isFollow }) => !isFollow);
    if (option === 'following') return users.filter(({ isFollow }) => isFollow);
  };

  const filteredUsersFromStorage = () => {
    const filtered = [];
    for (const user of users) {
      for (const updUser of updatedUsers) {
        if (user.id === updUser.id) filtered.push(updUser);
      }
    }
    return filtered;
  };

  const visibleUsers = filterUsers(filteredUsersFromStorage(), selectedOption);
  return (
    <List ref={listRef}>
      {visibleUsers.length > 0 &&
        visibleUsers.map(user => (
          <UserCard key={user.id} user={user} toggleFollow={toggleFollow} />
        ))}
    </List>
  );
};

export default UsersList;
