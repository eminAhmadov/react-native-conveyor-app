import React, {Component} from 'react';
import {ScrollView, View, Image} from 'react-native';
import Reinput from 'reinput';
import {Button, Text} from 'native-base';
import styles from '../../styles/styles';

const logoImage = require('../../assets/images/logo.png');

class RegistrationScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  render() {
    const {firstName, lastName, email, password, confirmPassword} = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView>
        <View style={styles.registrationScreenMainView}>
          <View style={styles.registrationScreenContentView}>
            <Image
              style={styles.registrationScreenLogoImageStyle}
              resizeMode="contain"
              source={logoImage}
            />
            <View style={styles.registrationScreenInputFieldsView}>
              <Reinput
                label="Frist Name"
                onBlur={value => {
                  this.setState({
                    firstName: value,
                  });
                }}
              />
              <Reinput
                label="Last Name"
                onChange={value => {
                  this.setState({
                    lastName: value,
                  });
                }}
              />
              <Reinput
                label="Email"
                onChange={value => {
                  this.setState({
                    email: value,
                  });
                }}
              />
              <Reinput
                label="Password"
                onChange={value => {
                  this.setState({
                    password: value,
                  });
                }}
              />
              <Reinput
                label="Confirm Password"
                onChange={value => {
                  this.setState({
                    confirmPassword: value,
                  });
                }}
              />
            </View>
            <View style={styles.registrationSreenButtonsContainer}>
              <Button
                rounded
                style={styles.registrationScreenRegisterButton}
                onPress={() => {}}>
                <Text style={styles.registrationScreenRegisterButtonText}>
                  Register
                </Text>
              </Button>
              <Button
                transparent
                onPress={() => navigation.navigate('Login')}
                style={styles.registrationScreenCancelButton}>
                <Text style={styles.registrationScreenCancelButtonText}>
                  Cancel
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default RegistrationScreen;
