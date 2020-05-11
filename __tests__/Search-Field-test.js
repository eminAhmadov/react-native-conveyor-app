/**
 * @format
 */

import 'react-native';
import React from 'react';
import SearchField from '../src/components/organisms/search-field';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Search Field renders correctly', () => {
  renderer.create(<SearchField />);
});
