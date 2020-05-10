/**
 * @format
 */

import 'react-native';
import React from 'react';
import TravelPromo from '../src/components/organisms/travel-promo';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Travel Promo renders correctly', () => {
  renderer.create(<TravelPromo />);
});
