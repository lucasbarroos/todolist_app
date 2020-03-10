import React from 'react';
import Routes from './src/routes';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;
