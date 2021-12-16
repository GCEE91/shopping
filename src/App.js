import React from 'react';

import './App.css';
import Header from './shared/Header';
import EventCard from './component/EventCard';

function App() {
  return (
    <React.Fragment>
      <Header />
      <EventCard />
    </React.Fragment>
  );
}

export default App;
