import styled from 'styled-components';

export const PageContainer = styled.section`
  padding: 40px 20px;
`;

export const TweetsContainer = styled.div`
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
