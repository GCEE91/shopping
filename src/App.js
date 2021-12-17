import React from 'react';
import './App.css';

import Header from './shared/Header';
import Main from './pages/Main';
import Shopping from './pages/Shopping';

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Main /> */}
      <Shopping />
    </React.Fragment>
  );
}

export default App;
