/**
 * @format
 */

import 'react-native';
import React from 'react';
import Notification from '../src/components/organisms/notification';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Load More renders correctly', () => {
  renderer.create(<Notification />);
});
