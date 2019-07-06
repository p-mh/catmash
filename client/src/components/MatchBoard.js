import React, { Component } from 'react';
import { fetchTwoCats } from '../services/cats';
import { updateScores } from '../services/scores';

import { MatchContainer, MidScreenContainer } from '../style/matchBoardStyle';

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
    const { cats } = this.state;
    const catsContainers = cats.map(({ url, id }) => (
      <MidScreenContainer
        key={id}
        backgroundImageUrl={url}
        onClick={this.vote.bind(null, id)}
      />
    ));
    return <MatchContainer>{catsContainers}</MatchContainer>;
  }
}
