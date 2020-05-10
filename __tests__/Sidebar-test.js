/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Sidebar from '../src/scenes/sidebar';

const mockStore = configureMockStore();
const store = mockStore({});

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Sidebar renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <Sidebar />
    </Provider>,
  );
});
