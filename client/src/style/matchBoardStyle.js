import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MatchPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Bubblegum Sans', cursive;
  font-size: 5rem;
  margin: 0;
  color: white;
  position: absolute;
  top: 30px;
  text-shadow: 0px 0px 10px #00000099;
`;

export const MatchContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const MidScreenContainer = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${({ backgroundImageUrl }) => backgroundImageUrl});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
`;

export const ViewScores = styled.div`
  position: absolute;
  bottom: 30px;
`;

export const ScoresLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ScoresButton = styled.button`
  border: none;
  border-radius: 3px;
  padding: 6px 15px 5px 15px;
  font-family: 'Bubblegum Sans', cursive;
  font-size: 1.5rem;
  background: linear-gradient(135deg, #e66465, #9198e5);
  cursor: pointer;
  color: white;
  box-shadow: #00000033 0px 0px 5px 5px;
`;
