import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {View, Icon} from 'native-base';
import {scaleSize} from '../../styles/mixins';

const userImage = require('../../assets/images/user.png');

const TravelPromo = ({}) => (
  <View
    style={{
      height: scaleSize(100),
      width: '95%',
      flexDirection: 'row',
      borderRadius: 20,
      borderWidth: 5,
      borderColor: '#008bdb',
      backgroundColor: 'white',
      marginVertical: 4,
    }}>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '30%',
      }}>
      <Image
        style={{width: '80%', height: '80%'}}
        resizeMode="contain"
        source={userImage}
      />
    </View>
    <View
      style={{
        height: '45%',
        width: '50%',
        paddingHorizontal: '5%',
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}>
      <Text>Emin Ahmadov</Text>
      <Text>Baku -> Budapest</Text>
      <Text>4 June 2020</Text>
    </View>
    <View
      style={{
        height: '100%',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={() => alert('Icon More pressed')}>
        <Icon
          style={{fontSize: 35, color: 'orange'}}
          type="Entypo"
          name="arrow-with-circle-right"
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default TravelPromo;
