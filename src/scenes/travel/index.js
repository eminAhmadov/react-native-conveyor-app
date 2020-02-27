import React from 'react';
import {View} from 'react-native';
import HeaderMain from '../../components/organisms/header-main';
import styles from '../../styles/styles';

const TravelScreen = ({navigation}) => (
  <View style={styles.homeScreenMainView}>
    <HeaderMain navigation={navigation} back backNavigateTo="Home" />
  </View>
);

export default TravelScreen;
