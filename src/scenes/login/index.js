import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Container, Content, Item, Input, Button, Text} from 'native-base';

const logoImage = require('../../assets/images/logo.png');

class LoginScreen extends Component {
  onLoginButtonPressed = () => {
    const {navigation} = this.props;

    navigation.navigate('Home');
  };

  render() {
    const {navigation} = this.props;
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '60%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{width: '50%'}}
            resizeMode="contain"
            source={logoImage}
          />
          <View>
            <Item style={{width: '80%'}}>
              <Input placeholder="Email" />
            </Item>
            <Item style={{width: '80%'}}>
              <Input placeholder="Password" />
            </Item>
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
              onPress={this.onLoginButtonPressed}>
              <Text
                style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                Login
              </Text>
            </Button>
            <Button
              transparent
              onPress={() => navigation.navigate('Registration')}
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                height: 35,
                marginTop: 10,
              }}>
              <Text style={{color: 'black'}}>Registration</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
