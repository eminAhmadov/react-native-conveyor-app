import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Item, Input} from 'native-base';
import {scaleSize} from '../../styles/mixins';

const userImage = require('../../assets/images/user.png');

const PostTravel = ({children, buttonLabel}) => (
  <View
    style={{
      height: '100%',
      width: '90%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <View
      style={{
        height: scaleSize(320),
        width: '100%',
        padding: '3%',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 40,
        borderColor: '#008bdb',
        borderWidth: 4,
        borderRadius: 20,
      }}>
      <View
        style={{
          height: '40%',
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
      <View
        style={{
          height: '60%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {children}
      </View>
    </View>
    <View
      style={{
        height: '15%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        rounded
        style={{
          borderRadius: 20,
          width: '50%',
          justifyContent: 'center',
          backgroundColor: 'orange',
        }}
        onPress={() => {}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
          }}>
          {buttonLabel}
        </Text>
      </Button>
    </View>
  </View>
);

export default PostTravel;
