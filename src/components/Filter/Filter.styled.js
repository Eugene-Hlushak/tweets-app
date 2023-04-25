import styled from 'styled-components';

export const FilterBox = styled.label`
  display: inline-block;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid black;
  border-radius: 8px;
`;

export const FilterLabel = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const FilterSelector = styled.select`
  width: 100px;
  height: 30px;
  border-radius: 8px;
`;
