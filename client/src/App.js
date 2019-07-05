import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MatchBoard from './components/MatchBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={MatchBoard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
