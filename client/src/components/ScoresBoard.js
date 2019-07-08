import React, { Component } from 'react';

import { getScores } from '../services/scores';

import {
  ScoresPageContainer,
  ScoreLoader,
  Scores,
  ScoreLine,
  ScorePicture,
  ScoreHeader,
  ScoreTitle,
  CloseLink,
  CloseButton,
} from '../style/scoresBoardStyle';

export default class ScoresBoard extends Component {
  state = {
    scores: [],
    isLoading: true,
  };
  componentDidMount() {
    this.getScores();
  }

  getScores = async () => {
    const scores = await getScores();
    this.setState({ scores, isLoading: false });
  };
  render() {
    const { scores, isLoading } = this.state;
    const showScores = scores.map(
      ({ cat_id, url, votes, victoryPercent }, index) => (
        <ScoreLine key={cat_id}>
          <div>{index + 1}. </div>
          <ScorePicture url={url} />
          <div>
            {victoryPercent} % ({votes} votes)
          </div>
          <div />
        </ScoreLine>
      )
    );
    const scoreHeader = (
      <ScoreHeader>
        <div>
          <ScoreTitle>Cats scores</ScoreTitle>
        </div>
        <CloseLink to="/">
          <CloseButton>
            <i className="fas fa-times" />
          </CloseButton>
        </CloseLink>
      </ScoreHeader>
    );
    return (
      <ScoresPageContainer>
        <Scores>
          {scoreHeader}
          {(isLoading && (
            <ScoreLoader>
              <i className="fas fa-paw fa-spin fa-2x" />
            </ScoreLoader>
          )) ||
            showScores}
        </Scores>
      </ScoresPageContainer>
    );
  }
}
