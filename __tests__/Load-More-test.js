/**
 * @format
 */

import 'react-native';
import React from 'react';
import LoadMore from '../src/components/organisms/load-more';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Load More renders correctly', () => {
  renderer.create(<LoadMore />);
});
