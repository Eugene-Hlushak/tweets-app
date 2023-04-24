import { Card, Tweets, Followers, FollowButton } from "./UserCard.styled";

const UserCard = ({ name, id, avatar, tweets, followers, isFollow }) => {
  return (
    <Card>
      <img src={avatar} alt={name} />
      <Tweets>{tweets} tweets</Tweets>
      <Followers>{followers} followers</Followers>
      <FollowButton>Follow</FollowButton>
    </Card>
  );
};

export default UserCard;
