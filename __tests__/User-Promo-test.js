/**
 * @format
 */

import 'react-native';
import React from 'react';
import UserPromo from '../src/components/molecules/user-promo';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('User Promo renders correctly', () => {
  renderer.create(<UserPromo />);
});
