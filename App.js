import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox, StatusBar} from 'react-native';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from './src/redux/store';
import {setupAxios, stripe_publishableKey} from './src/shared/exporter';
// import {StripeProvider} from '@stripe/stripe-react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Settings} from 'react-native-fbsdk-next';

// ignore warnings
LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

GoogleSignin.configure({
  webClientId:
    '647435031260-a1mpj6sleu1j2jfk3knl708bkor6gk0j.apps.googleusercontent.com',
});

Settings.setAppID('654542989551827');
Settings.initializeSDK();

const App = () => {
  // axios setup
  useEffect(() => {
    setupAxios();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      {/* <StripeProvider publishableKey={stripe_publishableKey}> */}
      <PersistGate persistor={persistor}>
        <MainNavigation />
      </PersistGate>
      {/* </StripeProvider> */}
    </Provider>
  );
};

export default App;
