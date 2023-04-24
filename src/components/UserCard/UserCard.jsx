import { Card, Tweets, Followers, FollowButton } from './UserCard.styled';

const UserCard = ({ user, toggleFollow }) => {
  const { id, avatar, name, tweets, followers, isFollow } = user;

  return (
    <Card>
      <img src={avatar} alt={name} />
      <Tweets>{tweets} tweets</Tweets>
      <Followers>{followers} followers</Followers>
      <FollowButton
        follow={isFollow}
        onClick={() => {
          console.log(followers);
          toggleFollow(id, followers, isFollow);
        }}
      >
        {isFollow ? 'Following' : 'Follow'}
      </FollowButton>
    </Card>
  );
};

export default UserCard;
