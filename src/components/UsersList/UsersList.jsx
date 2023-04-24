import { List } from './UsersList.styled';
import UserCard from '../UserCard/UserCard';

const UsersList = ({ users, toggleFollow }) => {
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
