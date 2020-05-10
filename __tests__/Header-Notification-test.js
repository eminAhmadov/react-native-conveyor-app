/**
 * @format
 */

import 'react-native';
import React from 'react';
import HeaderNotification from '../src/components/organisms/header-notification';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Header Notification renders correctly', () => {
  renderer.create(<HeaderNotification />);
});
