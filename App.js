import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import Tabs from './navigation/Tabs.js';

const MyTheme = {
  colors: {
    background: 'white',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <NativeBaseProvider>
        <Tabs />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
