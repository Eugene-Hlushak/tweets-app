import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  FollowButton,
  UserImg,
  ImgThumb,
} from './UserCard.styled';

const UserCard = ({ visibleUser, toggleFollow }) => {
  const { id, avatar, user, tweets, followers, isFollow } = visibleUser;
  const formatFollowers = new Intl.NumberFormat('en').format(followers);

  return (
    <Card>
      <ImgThumb>
        <UserImg src={avatar} alt={user} />
      </ImgThumb>
      <CardTitle>{tweets} tweets</CardTitle>
      <CardTitle style={{ marginBottom: '26px' }}>
        {formatFollowers} followers
      </CardTitle>
      <FollowButton
        follow={isFollow}
        onClick={() => toggleFollow(id, followers, isFollow)}
      >
        {isFollow ? 'Following' : 'Follow'}
      </FollowButton>
    </Card>
  );
};
UserCard.propTypes = {
  visibleUser: PropTypes.shape({}).isRequired,
  toggleFollow: PropTypes.func.isRequired,
};
export default UserCard;
