import React from 'react';
import {StatusBar} from 'react-native';
import {Home} from './src/screens/Home';

function App(): JSX.Element {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </>
  );
}

export default App;
