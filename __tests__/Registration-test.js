/**
 * @format
 */

import 'react-native';
import React from 'react';
import Registration from '../src/scenes/registration';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Registration renders correctly', () => {
  renderer.create(<Registration />);
});
