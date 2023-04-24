import { Card, Tweets, Followers, FollowButton } from './UserCard.styled';
import { updateUserFollowers } from 'services/fetchUsers';

const UserCard = ({ user, toggleFollow }) => {
  const { id, avatar, name, tweets, followers, isFollow } = user;

  return (
    <Card>
      <img src={avatar} alt={name} />
      <Tweets>{tweets} tweets</Tweets>
      <Followers>{followers} followers</Followers>
      <FollowButton onClick={() => toggleFollow(id, isFollow, followers)}>
        {isFollow ? 'Following' : 'Follow'}
      </FollowButton>
    </Card>
  );
};

export default UserCard;
