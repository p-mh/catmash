import styled from 'styled-components';

export const MatchContainer = styled.div`
  display: flex;
`;

export const MidScreenContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url(${({ backgroundImageUrl }) => backgroundImageUrl});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
`;
