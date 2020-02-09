import React from 'react';
import {View} from 'react-native';
import HeaderMain from '../../components/organisms/header-main';
import SearchField from '../../components/organisms/search-field';
import {ScrollView} from 'react-native-gesture-handler';
import TravelPromo from '../../components/organisms/travel-promo';

const SearchScreen = ({navigation}) => (
  <View
    style={{
      height: '100%',
      width: '100%',
      backgroundColor: '#45beff',
    }}>
    <HeaderMain navigation={navigation} />
    <SearchField />
    <ScrollView
      style={{height: '74%'}}
      contentContainerStyle={{alignItems: 'center'}}>
      <TravelPromo />
      <TravelPromo />
      <TravelPromo />
      <TravelPromo />
      <TravelPromo />
    </ScrollView>
  </View>
);

export default SearchScreen;
