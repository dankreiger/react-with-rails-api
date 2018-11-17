import React from 'react';
import Ideas from '../Ideas/Ideas';
import { AppHeader } from './App.styles';

const App = () => {
  return (
    <div className="App">
      <AppHeader>
        <h1>Idea Board</h1>
      </AppHeader>
      <Ideas />
    </div>
  );
};

export default App;
