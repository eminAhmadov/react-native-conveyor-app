import React from 'react';
import {View, StatusBar} from 'react-native';
import Navigator from './navigations';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './store/reducers';

const store = createStore(allReducers);

const App = () => (
  <Provider store={store}>
    <View style={{flex: 1}}>
      <StatusBar hidden barStyle="light-content" />
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
  </Provider>
);
export default App;
