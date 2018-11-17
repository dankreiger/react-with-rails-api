import React from 'react';
import Ideas from '../Ideas/Ideas';
import { AppHeader, AppWrapper } from './App.styles';

const App = () => {
  return (
    <AppWrapper>
      <AppHeader>
        <h1>Idea Board</h1>
      </AppHeader>
      <Ideas />
    </AppWrapper>
  );
};

export default App;
