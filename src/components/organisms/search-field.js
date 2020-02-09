import React from 'react';
import {View, Text, Platform} from 'react-native';
import {Button, Icon, Item, Input} from 'native-base';
import {scaleSize, boxShadow} from '../../styles/mixins';

const SearchField = () => (
  <View
    style={{
      height: '26%',
      width: '100%',
      backgroundColor: 'white',
      borderTopColor: 'gray',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      ...boxShadow('black'),
      borderTopWidth: Platform.OS === 'ios' ? 0 : 0.5,
    }}>
    <View
      style={{
        height: '70%',
        width: '100%',
        flexDirection: 'row',
      }}>
      <View style={{height: '100%', width: '80%'}}>
        <View
          style={{
            height: '50%',
            width: '100%',
            flexDirection: 'row',
          }}>
          <Item style={{width: '40%'}}>
            <Input placeholder="From" />
          </Item>
          <Icon
            style={{
              width: '20%',
              alignSelf: 'center',
              textAlign: 'center',
              color: 'orange',
            }}
            type="Entypo"
            name="arrow-with-circle-right"
          />
          <Item style={{width: '40%'}}>
            <Input placeholder="To" />
          </Item>
        </View>
        <View
          style={{
            height: '50%',
            width: '100%',
            flexDirection: 'row',
          }}>
          <Item style={{width: '40%'}}>
            <Input placeholder="Date from" />
          </Item>
          <Icon
            style={{
              width: '20%',
              alignSelf: 'center',
              textAlign: 'center',
              color: 'orange',
            }}
            type="Entypo"
            name="dots-two-vertical"
          />
          <Item style={{width: '40%'}}>
            <Input placeholder="Date to" />
          </Item>
        </View>
      </View>
      <View
        style={{
          height: '100%',
          width: '20%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          rounded
          style={{
            width: scaleSize(50),
            height: scaleSize(50),
            justifyContent: 'center',
            backgroundColor: 'orange',
          }}
          onPress={() => {}}>
          <Icon type="FontAwesome" name="search" />
        </Button>
      </View>
    </View>
    <View
      style={{
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: scaleSize(3),
      }}>
      <Button
        rounded
        style={{
          height: scaleSize(35),
          borderRadius: 20,
          width: '65%',
          justifyContent: 'center',
          backgroundColor: 'orange',
        }}
        onPress={() => {}}>
        <Text
          style={{
            fontSize: scaleSize(18),
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}>
          Set Notification Alert
        </Text>
      </Button>
    </View>
  </View>
);

export default SearchField;
