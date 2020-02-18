import React from 'react';
import {View, Text, Platform} from 'react-native';
import {ReinputButton} from 'reinput';
import Reinput from 'reinput';
import {Button, Icon, Item, Input} from 'native-base';
import {scaleSize, boxShadow} from '../../styles/mixins';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ModalSelector from 'react-native-modal-selector';
import data from '../../utils/cities';

class SearchField extends React.Component {
  showDatePicker = choosingDate => {
    this.setState({
      isDatePickerVisible: true,
      choosingDate: choosingDate,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  handleConfirm = date => {
    const {choosingDate} = this.state;
    let dateToDisplay = date.toDateString();
    if (choosingDate === 1) {
      this.setState({
        fromDate: date,
        fromDateToDisplay: dateToDisplay,
      });
    } else if (choosingDate === 2) {
      this.setState({
        toDate: date,
        toDateToDisplay: dateToDisplay,
      });
    }
    this.hideDatePicker();
  };

  state = {
    isDatePickerVisible: false,
    from: '',
    to: '',
    fromDate: '',
    fromDateToDisplay: '',
    toDate: '',
    toDateToDisplay: '',
    choosingDate: '',
  };

  render() {
    const {
      isDatePickerVisible,
      from,
      to,
      fromDateToDisplay,
      toDateToDisplay,
    } = this.state;
    return (
      <View
        style={{
          height: '26%',
          width: '100%',
          backgroundColor: 'white',
          borderTopColor: 'gray',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          ...boxShadow('black'),
          borderTopWidth: Platform.OS === 'ios' ? 0 : 0.5,
        }}>
        <View
          style={{
            height: '70%',
            width: '100%',
            flexDirection: 'row',
          }}>
          <View style={{height: '100%', width: '80%'}}>
            <View
              style={{
                height: '50%',
                width: '100%',
                flexDirection: 'row',
                paddingVertical: 10,
              }}>
              <View style={{flexDirection: 'column', width: '40%'}}>
                <ModalSelector
                  data={data}
                  animationType="fade"
                  overlayStyle={{backgroundColor: 'rgba(0,0,0,0.7)'}}
                  accessible={true}
                  style={{height: 50}}
                  optionContainerStyle={{backgroundColor: 'white'}}
                  onChange={option => {
                    this.setState({from: option.label});
                  }}>
                  <Reinput label="From" value={from} />
                </ModalSelector>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  width: '20%',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  style={{
                    textAlign: 'center',
                    color: 'orange',
                  }}
                  type="Entypo"
                  name="arrow-with-circle-right"
                />
              </View>
              <View style={{flexDirection: 'column', width: '40%'}}>
                <ModalSelector
                  data={data}
                  animationType="fade"
                  overlayStyle={{backgroundColor: 'rgba(0,0,0,0.7)'}}
                  accessible={true}
                  // style={{height: 50}}
                  optionContainerStyle={{backgroundColor: 'white'}}
                  onChange={option => {
                    this.setState({to: option.label});
                  }}>
                  <Reinput label="To" value={to} />
                </ModalSelector>
              </View>
            </View>
            <View
              style={{
                height: '50%',
                width: '100%',
                flexDirection: 'row',
                paddingVertical: 10,
              }}>
              <View style={{flexDirection: 'column', width: '40%'}}>
                <ReinputButton
                  label="From date"
                  value={fromDateToDisplay}
                  onPress={() => {
                    this.showDatePicker(1);
                  }}
                  style={{height: 50}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  width: '20%',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  style={{
                    textAlign: 'center',
                    color: 'orange',
                  }}
                  type="Entypo"
                  name="dots-two-vertical"
                />
              </View>
              <View style={{flexDirection: 'column', width: '40%'}}>
                <ReinputButton
                  label="To date"
                  value={toDateToDisplay}
                  onPress={() => {
                    this.showDatePicker(2);
                  }}
                  style={{height: 50}}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              height: '100%',
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              rounded
              style={{
                width: scaleSize(50),
                height: scaleSize(50),
                justifyContent: 'center',
                backgroundColor: 'orange',
              }}
              onPress={() => {}}>
              <Icon type="FontAwesome" name="search" />
            </Button>
          </View>
        </View>
        <View
          style={{
            height: '30%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: scaleSize(3),
          }}>
          <Button
            rounded
            style={{
              height: scaleSize(35),
              borderRadius: 20,
              width: '65%',
              justifyContent: 'center',
              backgroundColor: 'orange',
            }}
            onPress={() => {}}>
            <Text
              style={{
                fontSize: scaleSize(18),
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              Set Notification Alert
            </Text>
          </Button>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
        />
      </View>
    );
  }
}

export default SearchField;
