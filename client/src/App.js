import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MatchBoard from './components/MatchBoard';
import ScoresBoard from './components/ScoresBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={MatchBoard} />
        <Route path="/scores" component={ScoresBoard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
