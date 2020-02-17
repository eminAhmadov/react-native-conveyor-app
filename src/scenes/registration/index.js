import React, {Component} from 'react';
import {ScrollView, View, Image} from 'react-native';
import Reinput from 'reinput';
import {Container, Content, Item, Input, Button, Text} from 'native-base';
import {scaleSize} from '../../styles/mixins';

const logoImage = require('../../assets/images/logo.png');

class RegistrationScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              marginVertical: '20%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image
              style={{width: '50%'}}
              resizeMode="contain"
              source={logoImage}
            />
            <View style={{width: '80%'}}>
              <Reinput label="Frist Name" />
              <Reinput label="Last Name" />
              <Reinput label="Email" />
              <Reinput label="Password" />
              <Reinput label="Confirm Password" />
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
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
                  }}>
                  Register
                </Text>
              </Button>
              <Button
                transparent
                onPress={() => navigation.navigate('Login')}
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  height: 35,
                  marginTop: 10,
                }}>
                <Text style={{color: 'black'}}>Cancel</Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default RegistrationScreen;
