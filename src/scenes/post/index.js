import React from 'react';
import {View, Image, Text} from 'react-native';
import {ReinputButton} from 'reinput';
import Reinput from 'reinput';
import {Drawer, Item, Input, Button} from 'native-base';
import HeaderMain from '../../components/organisms/header-main';
import UserPromo from '../../components/molecules/user-promo';
import {scaleSize} from '../../styles/mixins';
import Sidebar from '../sidebar';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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
    date: '',
    dateToDisplay: '',
    comment: '',
  };

  render() {
    const {isDatePickerVisible, dateToDisplay, comment} = this.state;
    const {navigation} = this.props;
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()}>
        <View
          style={{height: '100%', width: '100%', backgroundColor: '#45beff'}}>
          <HeaderMain navigation={navigation} openDrawer={this.openDrawer} />
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
                }}>
                <UserPromo />
              </View>
              <View
                style={{
                  height: '60%',
                  width: '80%',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                }}>
                <Item>
                  <Input placeholder="From" />
                </Item>
                <Item>
                  <Input placeholder="To" />
                </Item>

                <ReinputButton
                  label="Date"
                  value={dateToDisplay}
                  onPress={() => {
                    this.showDatePicker();
                  }}
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
