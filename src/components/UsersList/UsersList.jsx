import { List } from './UsersList.styled';
import UserCard from '../UserCard/UserCard';

const UsersList = ({ users, updatedUsers, toggleFollow, selectedOption }) => {
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
    <List>
      {visibleUsers.length > 0 &&
        visibleUsers.map(user => (
          <UserCard key={user.id} user={user} toggleFollow={toggleFollow} />
        ))}
    </List>
  );
};

export default UsersList;
