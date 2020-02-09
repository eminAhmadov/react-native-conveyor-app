import React from 'react';
import {View} from 'react-native';
import HeaderMain from '../../components/organisms/header-main';
import SearchField from '../../components/organisms/search-field';

const SearchScreen = () => (
  <View
    style={{
      height: '100%',
      width: '100%',
      backgroundColor: '#45beff',
    }}>
    <HeaderMain />
    <SearchField />
  </View>
);

export default SearchScreen;
