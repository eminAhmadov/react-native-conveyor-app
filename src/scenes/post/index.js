import React from 'react';
import {View, Switch, Text, Alert, ActivityIndicator} from 'react-native';
import {ReinputButton} from 'reinput';
import Reinput from 'reinput';
import {Drawer, Icon, Button} from 'native-base';
import HeaderMain from '../../components/organisms/header-main';
import UserPromo from '../../components/molecules/user-promo';
import styles from '../../styles/styles';
import colors from '../../styles/colors';
import Sidebar from '../sidebar';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ModalSelector from 'react-native-modal-selector';
import data from '../../utils/cities';
import {connect} from 'react-redux';
import travelService from '../../services/travel/service';

const userImageMale = require('../../assets/images/user_male.png');
const userImageFemale = require('../../assets/images/user_female.png');

class PostScreen extends React.Component {
  initialState = {
    isDatePickerVisible: false,
    from: '',
    to: '',
    date: '',
    dateToDisplay: '',
    comment: '',
    includeFacebook: false,
    includeInstagram: false,
    includePhone: false,
    isButtonLoading: false,
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  showDatePicker = () => {
    this.setState({
      isDatePickerVisible: true,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    let dateToDisplay = date.toDateString();
    this.setState({
      date: date,
      dateToDisplay: dateToDisplay,
    });
    this.hideDatePicker();
  };

  formatDate = date => {
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  };

  onPostButtonPressed = () => {
    const {
      from,
      to,
      date,
      comment,
      includeFacebook,
      includeInstagram,
      includePhone,
    } = this.state;
    const {user} = this.props;
    const dateFormatted = this.formatDate(date);
    const commentText = comment ? comment : null;
    const facebook = includeFacebook ? user.facebook : null;
    const instagram = includeInstagram ? user.instagram : null;
    const phone = includePhone ? user.mobile : null;
    this.setState(
      {
        isButtonLoading: true,
      },
      () => {
        travelService
          .createTravel(
            user._id,
            user.name,
            user.gender,
            from,
            to,
            dateFormatted,
            commentText,
            facebook,
            instagram,
            phone,
          )
          .then(res => {
            console.log(res);
            this.setState(
              {
                isButtonLoading: false,
              },
              () => {
                Alert.alert(
                  'Success!',
                  `Created post with id: ${res.id}`,
                  [
                    {
                      text: 'OK',
                      onPress: () => {
                        this.setState({...this.initialState});
                      },
                    },
                  ],
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

  state = {
    ...this.initialState,
  };

  render() {
    const {
      isDatePickerVisible,
      from,
      to,
      dateToDisplay,
      comment,
      includeFacebook,
      includeInstagram,
      includePhone,
      isButtonLoading,
    } = this.state;
    const {navigation, user} = this.props;
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()}>
        <View style={styles.postScreenMainView}>
          <HeaderMain navigation={navigation} openDrawer={this.openDrawer} />
          <View style={styles.postScreenContentView}>
            <View style={styles.postScreenTravelDetailView}>
              <View style={styles.postScreenTravelDetailBorderedContainer}>
                <View style={styles.postScreenUserPromoContainer}>
                  <UserPromo
                    image={
                      user.gender === 'male' ? userImageMale : userImageFemale
                    }
                    name={user.name}
                  />
                </View>
                <View style={styles.postScreenInputFormsContainer}>
                  <View>
                    <ModalSelector
                      data={data}
                      animationType="fade"
                      overlayStyle={{
                        backgroundColor: colors.MODAL_OVERLAY_COLOR,
                      }}
                      accessible={true}
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{height: 50}}
                      optionContainerStyle={{
                        backgroundColor: colors.BACKGROUND_COLOR_LIGHT,
                      }}
                      onChange={option => {
                        this.setState({from: option.label});
                      }}>
                      <Reinput label="From" value={from} />
                    </ModalSelector>
                    <ModalSelector
                      data={data}
                      animationType="fade"
                      overlayStyle={{
                        backgroundColor: colors.MODAL_OVERLAY_COLOR,
                      }}
                      accessible={true}
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{height: 50}}
                      optionContainerStyle={{
                        backgroundColor: colors.BACKGROUND_COLOR_LIGHT,
                      }}
                      onChange={option => {
                        this.setState({to: option.label});
                      }}>
                      <Reinput label="To" value={to} />
                    </ModalSelector>
                    <ReinputButton
                      label="Date"
                      value={dateToDisplay}
                      onPress={() => {
                        this.showDatePicker();
                      }}
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{height: 50}}
                    />
                    <Reinput
                      label="Comment"
                      value={comment}
                      onChangeText={value => {
                        this.setState({
                          comment: value,
                        });
                      }}
                    />
                  </View>
                  <View style={styles.postScreenContactsToIncludeContainer}>
                    <Text style={styles.postScreenContactsToIncludeText}>
                      Contacts to include:
                    </Text>
                  </View>
                  <View style={styles.postScreenContactsSwitchesContainer}>
                    <View>
                      <Switch
                        value={includeFacebook}
                        style={styles.postScreenContactsSwitch}
                        trackColor={{
                          false: colors.SWITCH_TRACK_DISABLED_COLOR,
                          true: colors.SWITCH_TRACK_ENABLED_COLOR,
                        }}
                        thumbColor={
                          includeFacebook
                            ? colors.SWITCH_THUMB_ENABLED_COLOR
                            : colors.SWITCH_THUMB_DISABLED_COLOR
                        }
                        onValueChange={value => {
                          this.setState({
                            includeFacebook: value,
                          });
                        }}
                      />
                      <Icon
                        style={{
                          ...styles.postScreenContactsIcon,
                          color: includeFacebook
                            ? colors.CONTACT_ICON_FACEBOOK
                            : colors.CONTACT_ICON_DISABLED,
                        }}
                        type="FontAwesome"
                        name="facebook-square"
                      />
                    </View>
                    <View>
                      <Switch
                        value={includeInstagram}
                        style={styles.postScreenContactsSwitch}
                        trackColor={{
                          false: colors.SWITCH_TRACK_DISABLED_COLOR,
                          true: colors.SWITCH_TRACK_ENABLED_COLOR,
                        }}
                        thumbColor={
                          includeInstagram
                            ? colors.SWITCH_THUMB_ENABLED_COLOR
                            : colors.SWITCH_THUMB_DISABLED_COLOR
                        }
                        onValueChange={value => {
                          this.setState({
                            includeInstagram: value,
                          });
                        }}
                      />
                      <Icon
                        style={{
                          ...styles.postScreenContactsIcon,
                          color: includeInstagram
                            ? colors.CONTACT_ICON_INSTAGRAM
                            : colors.CONTACT_ICON_DISABLED,
                        }}
                        type="FontAwesome"
                        name="instagram"
                      />
                    </View>
                    <View>
                      <Switch
                        value={includePhone}
                        style={styles.postScreenContactsSwitch}
                        trackColor={{
                          false: colors.SWITCH_TRACK_DISABLED_COLOR,
                          true: colors.SWITCH_TRACK_ENABLED_COLOR,
                        }}
                        thumbColor={
                          includePhone
                            ? colors.SWITCH_THUMB_ENABLED_COLOR
                            : colors.SWITCH_THUMB_DISABLED_COLOR
                        }
                        onValueChange={value => {
                          this.setState({
                            includePhone: value,
                          });
                        }}
                      />
                      <Icon
                        style={{
                          ...styles.postScreenContactsIcon,
                          color: includePhone
                            ? colors.CONTACT_ICON_PHONE
                            : colors.CONTACT_ICON_DISABLED,
                        }}
                        type="FontAwesome"
                        name="phone-square"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.postScreenPostButtonView}>
              <Button
                rounded
                disabled={
                  from === '' ||
                  to === '' ||
                  dateToDisplay === '' ||
                  !(includeFacebook || includeInstagram || includePhone)
                }
                style={{
                  ...styles.postScreenPostButton,
                  backgroundColor:
                    from === '' ||
                    to === '' ||
                    dateToDisplay === '' ||
                    !(includeFacebook || includeInstagram || includePhone)
                      ? colors.ROUNDED_BUTTON_COLOR_DISABLED
                      : colors.ACCENT_COLOR,
                }}
                onPress={this.onPostButtonPressed}>
                {isButtonLoading ? (
                  <View>
                    <ActivityIndicator size="large" color="white" />
                  </View>
                ) : (
                  <Text style={styles.postScreenPostButtonText}>Post</Text>
                )}
              </Button>
            </View>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
          />
        </View>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  const {user} = state;
  return {user};
};

export default connect(mapStateToProps)(PostScreen);
