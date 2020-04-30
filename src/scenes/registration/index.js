import React, {Component} from 'react';
import {View, Image, ActivityIndicator, Alert} from 'react-native';
import Reinput from 'reinput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Button, Text} from 'native-base';
import ModalSelector from 'react-native-modal-selector';
import authService from '../../services/authentication/service';
import data from '../../utils/genders';
import styles from '../../styles/styles';
import colors from '../../styles/colors';

const logoImage = require('../../assets/images/logo.png');

class RegistrationScreen extends Component {
  state = {
    firstName: '',
    firstNameValid: false,
    firstNameError: '',
    lastName: '',
    lastNameValid: false,
    lastNameError: '',
    gender: '',
    email: '',
    emailValid: false,
    emailError: '',
    password: '',
    passwordValid: false,
    passwordError: '',
    confirmPassword: '',
    confirmPasswordValid: false,
    confirmPasswordError: '',
    facebook: '',
    facebookValid: false,
    facebookError: '',
    instagram: '',
    instagramValid: false,
    instagramError: '',
    mobile: '',
    mobileValid: false,
    mobileError: '',
    isButtonLoading: false,
  };

  validateFirstName = () => {
    const {firstName} = this.state;
    if (firstName.length >= 1) {
      this.setState({
        firstNameValid: true,
        firstNameError: '',
      });
    } else {
      this.setState({
        firstNameValid: false,
        firstNameError: 'Should not be empty',
      });
    }
  };

  validateLastName = () => {
    const {lastName} = this.state;
    if (lastName.length >= 1) {
      this.setState({
        lastNameValid: true,
        lastNameError: '',
      });
    } else {
      this.setState({
        lastNameValid: false,
        lastNameError: 'Should not be empty',
      });
    }
  };

  validateEmail = () => {
    const {email} = this.state;
    var emailRegex = /\S+@\S+\.\S+/;
    if (email.length <= 5) {
      this.setState({
        emailValid: false,
        emailError: 'Should not be shorter than 6 characters',
      });
    } else if (emailRegex.test(email)) {
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

  validateConfirmPassword = () => {
    const {confirmPassword, password} = this.state;
    if (confirmPassword === password) {
      this.setState({
        confirmPasswordValid: true,
        confirmPasswordError: '',
      });
    } else {
      this.setState({
        confirmPasswordValid: false,
        confirmPasswordError: 'Passwords should match',
      });
    }
  };

  validateFacebook = () => {
    const {facebook} = this.state;
    var facebookRegex = /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/;
    if (facebookRegex.test(facebook)) {
      this.setState({
        facebookValid: true,
        facebookError: '',
      });
    } else {
      this.setState({
        facebookValid: false,
        facebookError: 'Should match facebook link format',
      });
    }
  };

  validateInstagram = () => {
    const {instagram} = this.state;
    if (instagram.length >= 1) {
      this.setState({
        instagramValid: true,
        instagramError: '',
      });
    } else {
      this.setState({
        instagramValid: false,
        instagramError: 'Should not be empty',
      });
    }
  };

  validateMobile = () => {
    const {mobile} = this.state;
    var mobileRegex = /[\+]{0,1}(\d{10,13}|[\(][\+]{0,1}\d{2,}[\13)]*\d{5,13}|\d{2,6}[\-]{1}\d{2,13}[\-]*\d{3,13})/;
    if (mobileRegex.test(mobile)) {
      this.setState({
        mobileValid: true,
        mobileError: '',
      });
    } else {
      this.setState({
        mobileValid: false,
        mobileError: 'Should match phone number format',
      });
    }
  };

  onRegistrationButtonPressed = () => {
    const {
      firstName,
      lastName,
      gender,
      email,
      password,
      facebook,
      instagram,
      mobile,
    } = this.state;
    const {navigation} = this.props;
    this.setState(
      {
        isButtonLoading: true,
      },
      () => {
        authService
          .register(
            `${firstName} ${lastName}`,
            email,
            password,
            gender.toLocaleLowerCase(),
            facebook,
            instagram,
            mobile,
          )
          .then(res => {
            // onLogin(res);
            console.log(res);
            this.setState(
              {
                isButtonLoading: false,
              },
              () => {
                Alert.alert(
                  'Success!',
                  `Created user with id: ${res.user}`,
                  [{text: 'OK', onPress: () => navigation.navigate('Login')}],
                  {cancelable: false},
                );
              },
            );
          })
          .catch(err => {
            this.setState(
              {
                isButtonLoading: false,
              },
              () => {
                Alert.alert(
                  'Failure!',
                  err.message,
                  [{text: 'OK', onPress: () => {}}],
                  {cancelable: false},
                );
              },
            );
          });
      },
    );
  };

  render() {
    const {
      firstName,
      firstNameValid,
      firstNameError,
      lastName,
      lastNameValid,
      lastNameError,
      gender,
      email,
      emailValid,
      emailError,
      password,
      passwordValid,
      passwordError,
      confirmPassword,
      confirmPasswordValid,
      confirmPasswordError,
      facebook,
      facebookValid,
      facebookError,
      instagram,
      instagramValid,
      instagramError,
      mobile,
      mobileValid,
      mobileError,
      isButtonLoading,
    } = this.state;
    const {navigation} = this.props;
    return (
      <KeyboardAwareScrollView
        style={{backgroundColor: colors.BACKGROUND_COLOR}}>
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
                value={firstName}
                activeColor={colors.INPUT_FIELD_ACTIVE}
                color={colors.INPUT_FIELD_TEXT}
                labelActiveColor={colors.INPUT_FIELD_ACTIVE}
                labelColor={colors.INPUT_FIELD_INACTIVE}
                error={firstNameError}
                onChangeText={value => {
                  this.setState({
                    firstName: value.replace(/\s/g, ''),
                    firstNameValid: false,
                    firstNameError: '',
                  });
                }}
                onBlur={() => {
                  this.validateFirstName();
                }}
              />
              <Reinput
                label="Last Name"
                value={lastName}
                activeColor={colors.INPUT_FIELD_ACTIVE}
                color={colors.INPUT_FIELD_TEXT}
                labelActiveColor={colors.INPUT_FIELD_ACTIVE}
                labelColor={colors.INPUT_FIELD_INACTIVE}
                error={lastNameError}
                onChangeText={value => {
                  this.setState({
                    lastName: value.replace(/\s/g, ''),
                    lastNameValid: false,
                    lastNameError: '',
                  });
                }}
                onBlur={() => {
                  this.validateLastName();
                }}
              />
              <ModalSelector
                data={data}
                animationType="fade"
                overlayStyle={{backgroundColor: colors.MODAL_OVERLAY_COLOR}}
                accessible={true}
                optionContainerStyle={{
                  backgroundColor: colors.BACKGROUND_COLOR_LIGHT,
                }}
                onChange={option => {
                  this.setState({gender: option.label});
                }}>
                <Reinput
                  label="Gender"
                  activeColor={colors.INPUT_FIELD_ACTIVE}
                  color={colors.INPUT_FIELD_TEXT}
                  labelActiveColor={colors.INPUT_FIELD_ACTIVE}
                  labelColor={colors.INPUT_FIELD_INACTIVE}
                  value={gender}
                />
              </ModalSelector>
              <Reinput
                label="Email"
                value={email}
                autoCapitalize="none"
                activeColor={colors.INPUT_FIELD_ACTIVE}
                color={colors.INPUT_FIELD_TEXT}
                labelActiveColor={colors.INPUT_FIELD_ACTIVE}
                labelColor={colors.INPUT_FIELD_INACTIVE}
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
                activeColor={colors.INPUT_FIELD_ACTIVE}
                color={colors.INPUT_FIELD_TEXT}
                labelActiveColor={colors.INPUT_FIELD_ACTIVE}
                labelColor={colors.INPUT_FIELD_INACTIVE}
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
              <Reinput
                label="Confirm Password"
                value={confirmPassword}
                autoCapitalize="none"
                secureTextEntry={true}
                activeColor={colors.INPUT_FIELD_ACTIVE}
                color={colors.INPUT_FIELD_TEXT}
                labelActiveColor={colors.INPUT_FIELD_ACTIVE}
                labelColor={colors.INPUT_FIELD_INACTIVE}
                error={confirmPasswordError}
                onChangeText={value => {
                  this.setState({
                    confirmPassword: value.replace(/\s/g, ''),
                    confirmPasswordValid: false,
                    confirmPasswordError: '',
                  });
                }}
                onBlur={() => {
                  this.validateConfirmPassword();
                }}
              />
              <Reinput
                label="Facebook"
                value={facebook}
                autoCapitalize="none"
                activeColor={colors.INPUT_FIELD_ACTIVE}
                color={colors.INPUT_FIELD_TEXT}
                labelActiveColor={colors.INPUT_FIELD_ACTIVE}
                labelColor={colors.INPUT_FIELD_INACTIVE}
                error={facebookError}
                onChangeText={value => {
                  this.setState({
                    facebook: value.replace(/\s/g, ''),
                    facebookValid: false,
                    facebookError: '',
                  });
                }}
                onBlur={() => {
                  this.validateFacebook();
                }}
              />
              <Reinput
                label="Instagram"
                value={instagram}
                autoCapitalize="none"
                activeColor={colors.INPUT_FIELD_ACTIVE}
                color={colors.INPUT_FIELD_TEXT}
                labelActiveColor={colors.INPUT_FIELD_ACTIVE}
                labelColor={colors.INPUT_FIELD_INACTIVE}
                error={instagramError}
                onChangeText={value => {
                  this.setState({
                    instagram: value.replace(/\s/g, ''),
                    instagramValid: false,
                    instagramError: '',
                  });
                }}
                onBlur={() => {
                  this.validateInstagram();
                }}
              />
              <Reinput
                label="Mobile"
                value={mobile}
                keyboardType="phone-pad"
                activeColor={colors.INPUT_FIELD_ACTIVE}
                color={colors.INPUT_FIELD_TEXT}
                labelActiveColor={colors.INPUT_FIELD_ACTIVE}
                labelColor={colors.INPUT_FIELD_INACTIVE}
                error={mobileError}
                onChangeText={value => {
                  this.setState({
                    mobile: value,
                    mobileValid: false,
                    mobileError: '',
                  });
                }}
                onBlur={() => {
                  this.validateMobile();
                }}
              />
            </View>
            <View style={styles.registrationSreenButtonsContainer}>
              <Button
                rounded
                disabled={
                  !firstNameValid ||
                  !lastNameValid ||
                  !gender ||
                  !emailValid ||
                  !passwordValid ||
                  !confirmPasswordValid ||
                  !facebookValid ||
                  !instagramValid ||
                  !mobileValid
                }
                style={{
                  ...styles.registrationScreenRegisterButton,
                  backgroundColor:
                    !firstNameValid ||
                    !lastNameValid ||
                    !gender ||
                    !emailValid ||
                    !passwordValid ||
                    !confirmPasswordValid ||
                    !facebookValid ||
                    !instagramValid ||
                    !mobileValid
                      ? colors.ROUNDED_BUTTON_COLOR_DISABLED
                      : colors.ACCENT_COLOR,
                }}
                onPress={this.onRegistrationButtonPressed}>
                {isButtonLoading ? (
                  <View>
                    <ActivityIndicator size="large" color="white" />
                  </View>
                ) : (
                  <Text style={styles.registrationScreenRegisterButtonText}>
                    Register
                  </Text>
                )}
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
      </KeyboardAwareScrollView>
    );
  }
}

export default RegistrationScreen;
