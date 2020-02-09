import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import TravelPromo from '../../components/organisms/travel-promo';
import {View} from 'native-base';
import HeaderMain from '../../components/organisms/header-main';

const HomeScreen = ({navigation}) => (
  <View
    style={{
      height: '100%',
      width: '100%',
      backgroundColor: '#45beff',
    }}>
    <HeaderMain navigation={navigation} />
    <View style={{alignItems: 'center'}}>
      <TravelPromo navigation={navigation} />
      <TravelPromo navigation={navigation} />
      <TravelPromo navigation={navigation} />
    </View>
  </View>
);

export default HomeScreen;
