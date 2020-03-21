import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Reinput from 'reinput';
import {Button, Text} from 'native-base';
import {connect} from 'react-redux';
import {getUser} from '../../store/actions';
import styles from '../../styles/styles';

const logoImage = require('../../assets/images/logo.png');

class LoginScreen extends Component {
  onLoginButtonPressed = () => {
    const {navigation, onLogin} = this.props;
    onLogin({firstName: 'Emin', lastName: 'Ahmadov'});
    navigation.navigate('Home');
  };

  onRegisterButtonPressed = () => {
    const {navigation} = this.props;
    navigation.navigate('Registration');
  };

  state = {
    email: '',
    password: '',
  };

  render() {
    const {email, password} = this.state;
    return (
      <View style={styles.loginScreenMainView}>
        <View style={styles.loginScreenContentView}>
          <Image
            style={styles.loginScreenLogoImage}
            resizeMode="contain"
            source={logoImage}
          />
          <View style={styles.loginScreenInputsView}>
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
          </View>
          <View style={styles.loginScreenButtonsView}>
            <Button
              rounded
              style={styles.loginScreenLoginButton}
              onPress={this.onLoginButtonPressed}>
              <Text style={styles.loginScreenLoginButtonText}>Login</Text>
            </Button>
            <Button
              transparent
              onPress={this.onRegisterButtonPressed}
              style={styles.loginScreenRegisterButton}>
              <Text style={styles.loginScreenRegisterButtonText}>
                Registration
              </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: user => {
    dispatch(getUser(user));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginScreen);
