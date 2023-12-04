import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import Config from 'react-native-config';
import {Home} from './src/screens/Home';

const codePushOptions = {
  deploymentKey: Config.CODEPUSH_PRODUCTION_KEY,
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

function App(): JSX.Element {
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
    SplashScreen.hide();
  }, []);
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

export default codePush(codePushOptions)(App);
