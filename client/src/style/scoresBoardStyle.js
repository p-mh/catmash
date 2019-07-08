import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ScoresPageContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff99;
`;

export const ScoreLoader = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Scores = styled.div`
  width: 20%;
  height: calc(100% - 120px);
  min-width: 300px;
  margin: 40px auto;
  background: linear-gradient(135deg, #e66465, #9198e5);
  padding: 20px;
  border-radius: 2px;
  box-shadow: #00000044 0px 0px 5px 5px;
  overflow-y: scroll;
  color: white;
`;

export const ScoreLine = styled.div`
  display: flex;
  align-items: center;
  border-bottom: white 1px solid;
  margin-bottom: 10px;
  padding-bottom: 10px;
  :last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const ScorePicture = styled.div`
  background-image: url(${({ url }) => url});
  background-position: center center;
  background-size: cover;
  width: 50px;
  height: 50px;
  margin: 0 10px;
`;

export const ScoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  align-items: flex-start;
`;

export const ScoreTitle = styled.h1`
  margin: 0;
  font-family: 'Bubblegum Sans', cursive;
`;

export const CloseLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const CloseButton = styled.div`
  border-radius: 50%;
  border: white 3px solid;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
