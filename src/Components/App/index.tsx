import React from 'react';

import NavBar from '../NavBar';
import Router from '../Routes';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div id="main-container">
        <Router />
      </div>
    </>
  );
};

export default App;
