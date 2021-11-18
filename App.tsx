/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { LogBox } from 'react-native';
import _ from 'lodash';

LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


import React from 'react';
import 'react-native-gesture-handler';
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native';
import { StripeProvider } from '@stripe/stripe-react-native';

import config from './src/aws-exports'
Amplify.configure(config)

import {
  View, StatusBar, useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import Router from './src/router';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (

    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StripeProvider  publishableKey="pk_test_51JHNXlBKlUKWDS4xwUiomi8cYnZlZJliujlu9vmII0xVYKc3q5o3MyPlmgu9pxf9xDgdFIj4a4GreFCY810bIVrm00MpYkeIHQ">
        <Router />
      </StripeProvider>
    </View>
  );
};



export default withAuthenticator(App);
