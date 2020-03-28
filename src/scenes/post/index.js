import React from 'react';
import {View, Switch, Text} from 'react-native';
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

const userImage = require('../../assets/images/user_male.png');

export default class PostScreen extends React.Component {
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

  state = {
    isDatePickerVisible: false,
    from: '',
    to: '',
    date: '',
    dateToDisplay: '',
    comment: '',
  };

  render() {
    const {isDatePickerVisible, from, to, dateToDisplay, comment} = this.state;
    const {navigation} = this.props;
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
                  <UserPromo image={userImage} name={'Emin Ahmadov'} />
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
                        value={true}
                        style={styles.postScreenContactsSwitch}
                        onValueChange={value => {}}
                      />
                      <Icon
                        style={{
                          ...styles.postScreenContactsIcon,
                          color: colors.ACCENT_COLOR,
                        }}
                        type="FontAwesome"
                        name="facebook-square"
                      />
                    </View>
                    <View>
                      <Switch
                        value={true}
                        style={styles.postScreenContactsSwitch}
                        onValueChange={value => {}}
                      />
                      <Icon
                        style={{
                          ...styles.postScreenContactsIcon,
                          color: colors.ACCENT_COLOR,
                        }}
                        type="FontAwesome"
                        name="instagram"
                      />
                    </View>
                    <View>
                      <Switch
                        value={true}
                        style={styles.postScreenContactsSwitch}
                        onValueChange={value => {}}
                      />
                      <Icon
                        style={{
                          ...styles.postScreenContactsIcon,
                          color: colors.ACCENT_COLOR,
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
                style={styles.postScreenPostButton}
                onPress={() => {}}>
                <Text style={styles.postScreenPostButtonText}>Post</Text>
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
