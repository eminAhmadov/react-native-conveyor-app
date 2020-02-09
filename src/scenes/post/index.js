import React from 'react';
import {View, Image, Text} from 'react-native';
import {Container, Content, Item, Input, Button} from 'native-base';
import HeaderMain from '../../components/organisms/header-main';
import {scaleSize} from '../../styles/mixins';

const userImage = require('../../assets/images/user.png');

const PostScreen = ({navigation}) => (
  <View style={{height: '100%', width: '100%', backgroundColor: '#45beff'}}>
    <HeaderMain navigation={navigation} />
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
            Post
          </Text>
        </Button>
      </View>
    </View>
  </View>
);

export default PostScreen;
