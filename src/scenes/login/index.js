import React, {Component} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import Reinput from 'reinput';
import {Button, Text} from 'native-base';
import {connect} from 'react-redux';
import {getUser, getPushNotId} from '../../store/actions';
import authService from '../../services/authentication/service';
import styles from '../../styles/styles';
import colors from '../../styles/colors';
import OneSignal from 'react-native-onesignal';

const logoImage = require('../../assets/images/logo.png');

class LoginScreen extends Component {
  initialState = {
    email: '',
    emailValid: false,
    emailError: '',
    password: '',
    passwordValid: false,
    passwordError: '',
    isButtonLoading: false,
  };

  componentDidMount() {
    OneSignal.init('ca7820f2-1c22-4331-a91a-4c9f0ed68419', {
      kOSSettingsKeyAutoPrompt: true,
    }); // set kOSSettingsKeyAutoPrompt to false prompting manually on iOS
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = notification => {
    console.log('Notification received: ', notification);
  };

  onOpened = openResult => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };

  onIds = device => {
    const {onOneSignalInit} = this.props;
    console.log('Device info: ', device);
    onOneSignalInit(device.userId);
  };

  state = {
    ...this.initialState,
  };

  onLoginButtonPressed = () => {
    const {email, password} = this.state;
    const {navigation, onLogin, pushNotId} = this.props;
    this.setState(
      {
        isButtonLoading: true,
      },
      () => {
        authService
          .login(email, password)
          .catch(err => {
            this.setState({
              ...this.initialState,
            });
            alert(err.message);
          })
          .then(res => {
            onLogin(res);
            console.log(res);
            console.log(pushNotId);
            navigation.navigate('Home');
          });
      },
    );
  };

  onRegisterButtonPressed = () => {
    const {navigation} = this.props;
    navigation.navigate('Registration');
  };

  validateEmail = () => {
    const {email} = this.state;
    var emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email)) {
      this.setState({
        emailValid: true,
        emailError: '',
      });
    } else {
      this.setState({
        emailValid: false,
        emailError: 'Should match email format',
      });
    }
  };

  validatePassword = () => {
    const {password} = this.state;
    if (password.length >= 8) {
      this.setState({
        passwordValid: true,
        passwordError: '',
      });
    } else {
      this.setState({
        passwordValid: false,
        passwordError: 'Should not be shorter that 8 characters',
      });
    }
  };

  render() {
    const {
      email,
      password,
      emailValid,
      emailError,
      passwordValid,
      passwordError,
      isButtonLoading,
    } = this.state;
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
              value={email}
              autoCapitalize="none"
              // activeColor={colors.INPUT_FIELD_ACTIVE}
              // color={colors.INPUT_FIELD_TEXT}
              // labelActiveColor={colors.INPUT_FIELD_INACTIVE}
              // labelColor={colors.INPUT_FIELD_INACTIVE}
              error={emailError}
              onChangeText={value => {
                this.setState({
                  email: value.replace(/\s/g, ''),
                  emailValid: false,
                  emailError: '',
                });
              }}
              onBlur={() => {
                this.validateEmail();
              }}
            />
            <Reinput
              label="Password"
              value={password}
              autoCapitalize="none"
              secureTextEntry={true}
              error={passwordError}
              onChangeText={value => {
                this.setState({
                  password: value.replace(/\s/g, ''),
                  passwordValid: false,
                  passwordError: '',
                });
              }}
              onBlur={() => {
                this.validatePassword();
              }}
            />
          </View>
          <View style={styles.loginScreenButtonsView}>
            <Button
              rounded
              disabled={!emailValid || !passwordValid}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                ...styles.loginScreenLoginButton,
                backgroundColor:
                  !emailValid || !passwordValid
                    ? colors.ROUNDED_BUTTON_COLOR_DISABLED
                    : colors.ACCENT_COLOR,
              }}
              onPress={this.onLoginButtonPressed}>
              {isButtonLoading ? (
                <View>
                  <ActivityIndicator size="large" color="white" />
                </View>
              ) : (
                <Text style={styles.loginScreenLoginButtonText}>Login</Text>
              )}
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

const mapStateToProps = state => {
  const {pushNotId} = state;
  return {pushNotId};
};

const mapDispatchToProps = dispatch => ({
  onLogin: user => {
    dispatch(getUser(user));
  },
  onOneSignalInit: pushNotId => {
    dispatch(getPushNotId(pushNotId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
