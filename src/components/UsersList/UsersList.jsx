import PropTypes from 'prop-types';
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
        visibleUsers.map(visibleUser => (
          <UserCard
            key={visibleUser.id}
            visibleUser={visibleUser}
            toggleFollow={toggleFollow}
          />
        ))}
    </List>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  updatedUsers: PropTypes.array.isRequired,
  toggleFollow: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
};

export default UsersList;
