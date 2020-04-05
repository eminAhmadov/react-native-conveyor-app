import React from 'react';
import {View, StatusBar} from 'react-native';
import Navigator from './navigations';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './store/reducers';
import OneSignal from 'react-native-onesignal';

const store = createStore(allReducers);

class App extends React.Component {
  componentDidMount() {
    OneSignal.init('ca7820f2-1c22-4331-a91a-4c9f0ed68419', {
      kOSSettingsKeyAutoPrompt: true,
    }); // set kOSSettingsKeyAutoPrompt to false prompting manually on iOS
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log('Notification received: ', notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
