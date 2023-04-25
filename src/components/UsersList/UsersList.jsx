import { List } from './UsersList.styled';
import UserCard from '../UserCard/UserCard';

const UsersList = ({ users, toggleFollow, selectedOption }) => {
  const filterUsers = (users, option) => {
    if (option === 'all') return users;
    if (option === 'follow') return users.filter(({ isFollow }) => !isFollow);
    if (option === 'following') return users.filter(({ isFollow }) => isFollow);
  };

  const visibleUsers = filterUsers(users, selectedOption);
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
