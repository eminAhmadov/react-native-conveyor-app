import React from 'react';
import {View} from 'react-native';
import HeaderMain from '../../components/organisms/header-main';
import PostTravel from '../../components/organisms/post-travel';

const PostScreen = () => (
  <View style={{height: '100%', width: '100%', backgroundColor: '#45beff'}}>
    <HeaderMain />
    <PostTravel />
  </View>
);

export default PostScreen;
