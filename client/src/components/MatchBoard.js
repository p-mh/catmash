import React, { Component } from 'react';
import { fetchTwoCats } from '../services/cats';
import { updateScores } from '../services/scores';

import {
  MatchPageContainer,
  MatchLoader,
  MatchContainer,
  Title,
  MidScreenContainer,
  ViewScores,
  ScoresLink,
  ScoresButton,
} from '../style/matchBoardStyle';

export default class MatchBoard extends Component {
  state = { isLoading: true, cats: [] };

  componentDidMount() {
    this.getTwoCats();
  }

  getTwoCats = async () => {
    const cats = await fetchTwoCats();
    this.setState({ cats, isLoading: false });
  };

  vote = winId => {
    this.setState({ isLoading: true });
    const { cats } = this.state;
    updateScores(cats.map(({ id }) => ({ id, isWin: winId === id })));
    this.getTwoCats();
  };

  render() {
    const { cats, isLoading } = this.state;

    const catsContainers = cats.map(({ url, id }) => (
      <MidScreenContainer
        key={id}
        backgroundImageUrl={url}
        onClick={this.vote.bind(null, id)}
      />
    ));

    const ScoreButton = (
      <ViewScores>
        <ScoresLink to="/scores">
          <ScoresButton>View scores</ScoresButton>
        </ScoresLink>
      </ViewScores>
    );
    return (
      <MatchPageContainer>
        <Title>Catmash</Title>
        {(isLoading && (
          <MatchLoader>
            <i className="fas fa-paw fa-spin fa-3x" />
          </MatchLoader>
        )) || <MatchContainer>{catsContainers}</MatchContainer>}
        {ScoreButton}
      </MatchPageContainer>
    );
  }
}
