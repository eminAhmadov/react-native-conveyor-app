import React from 'react';
import {View, Image, Text} from 'react-native';

const userImage = require('../../assets/images/user.png');

const UserPromo = ({}) => (
  <View
    style={{
      height: '100%',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <Image
      style={{height: '80%', width: '40%'}}
      resizeMode="contain"
      source={userImage}
    />
    <Text style={{fontSize: 20, fontWeight: '600'}}>Emin Ahmadov</Text>
  </View>
);

export default UserPromo;
