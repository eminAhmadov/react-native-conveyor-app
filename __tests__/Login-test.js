/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Login from '../src/scenes/login';

const mockStore = configureMockStore();
const store = mockStore({});

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Login renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <Login />
    </Provider>,
  );
});
