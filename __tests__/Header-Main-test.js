/**
 * @format
 */

import 'react-native';
import React from 'react';
import HeaderMain from '../src/components/organisms/header-main';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Header Main renders correctly', () => {
  renderer.create(<HeaderMain />);
});
