import React from 'react';
import {View} from 'react-native';
import {Button, Item, Input} from 'native-base';
import HeaderMain from '../../components/organisms/header-main';
import PostTravel from '../../components/organisms/post-travel';

const PostScreen = ({navigation}) => (
  <View style={{height: '100%', width: '100%', backgroundColor: '#45beff'}}>
    <HeaderMain navigation={navigation} />
    <PostTravel buttonLabel="Post">
      <Item style={{width: '80%'}}>
        <Input placeholder="From" />
      </Item>
      <Item style={{width: '80%'}}>
        <Input placeholder="To" />
      </Item>
      <Item style={{width: '80%'}}>
        <Input placeholder="Date" />
      </Item>
      <Item style={{width: '80%'}}>
        <Input placeholder="Comment" />
      </Item>
    </PostTravel>
  </View>
);

export default PostScreen;
