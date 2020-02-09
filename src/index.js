import React from 'react';
import {View, StatusBar} from 'react-native';
import Navigator from './navigations';

const App = () => (
  <View style={{flex: 1}}>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <Navigator
      initialRoute={{statusBarHidden: false}}
      renderScene={() => (
        <View>
          <StatusBar />
          ...
        </View>
      )}
    />
  </View>
);
export default App;
