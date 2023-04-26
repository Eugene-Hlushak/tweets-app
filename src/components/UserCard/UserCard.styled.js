import styled from 'styled-components';
import bg from '../../images/picture.png';
import logo from '../../images/logo.png';

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 380px;
  height: 460px;
  padding-bottom: 36px;
  text-align: center;

  background-image: url(${logo}), url(${bg}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 76px, 308px 168px, cover;
  background-position: 20px 20px, 36px 28px, 0 0;
  background-repeat: no-repeat;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::after {
    content: '';
    position: absolute;
    top: 214px;
    left: 50%;
    transform: translateX(-50%);

    display: block;
    width: 380px;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const ImgThumb = styled.div`
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: 80px;
  height: 80px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  border-radius: 50%;
`;

export const UserImg = styled.img`
  position: absolute;
  top: 9px;
  left: 50%;
  transform: translateX(-50%);
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const CardTitle = styled.p`
  margin-bottom: 16px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const FollowButton = styled.button`
  width: 230px;
  padding: 14px 56px;
  font-family: 'Montserrat';

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  border: none;
  background-color: ${props => (props.follow ? `#5CD3A8` : `#ebd8ff`)};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  cursor: pointer;

  &:hover {
    background-color: ${props => (props.follow ? `#ebd8ff` : `#5CD3A8`)};
  }
`;
