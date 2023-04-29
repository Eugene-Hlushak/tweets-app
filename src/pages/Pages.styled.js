import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.section`
  text-align: center;
  padding: 40px 20px;
`;

export const TweetsContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadMoreBtn = styled.button`
  padding: 10px;
  width: 130px;
  font-family: 'Montserrat';
  font-weight: 500;
  border-radius: 8px;
  background-color: #5736a3;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  &:hover {
    background-color: #5cd3a8;
  }
`;

export const Head = styled.h1`
  font-family: 'Montserrat';
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 30px;
  line-height: 48px;
  text-transform: uppercase;
  color: #373737;
`;

export const Subtitle = styled.p`
  margin-bottom: 40px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
`;

export const ToHome = styled(Link)`
  display: inline-block;
  /* width: 200px;
  height: 53px; */
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid black;
  border-radius: 8px;
  text-decoration: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
`;

export const ToTweets = styled(Link)`
  display: inline-block;
  width: 200px;
  padding-top: 20px;
  padding-bottom: 20px;

  font-family: 'Montserrat';

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  text-decoration: none;
  color: #373737;
  border: none;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
