import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Container, Content, Item, Input, Button, Text} from 'native-base';
import HeaderMain from '../../components/organisms/header-main';
import {scaleSize} from '../../styles/mixins';

const TravelScreen = ({navigation}) => (
  <View
    style={{
      height: '100%',
      width: '100%',
      backgroundColor: '#45beff',
    }}>
    <HeaderMain navigation={navigation} back backNavigateTo="Home" />
  </View>
);

export default TravelScreen;
