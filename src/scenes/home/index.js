import React from 'react';
import {ScrollView} from 'react-native';
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
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <TravelPromo navigation={navigation} />
      <TravelPromo navigation={navigation} />
      <TravelPromo navigation={navigation} />
    </ScrollView>
  </View>
);

export default HomeScreen;
