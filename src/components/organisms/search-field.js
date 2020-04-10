import React from 'react';
import {View, Text} from 'react-native';
import {ReinputButton} from 'reinput';
import Reinput from 'reinput';
import {Button, Icon} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ModalSelector from 'react-native-modal-selector';
import data from '../../utils/cities';
import styles from '../../styles/styles';
import colors from '../../styles/colors';

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

  handleCancel = () => {
    const {choosingDate} = this.state;
    if (choosingDate === 1) {
      this.setState({
        fromDate: '',
        fromDateToDisplay: '',
      });
    } else if (choosingDate === 2) {
      this.setState({
        toDate: '',
        toDateToDisplay: '',
      });
    }
    this.hideDatePicker();
  };

  formatDate = date => {
    if (date) {
      var month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }

      return [year, month, day].join('-');
    }
    return '';
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
      fromDate,
      fromDateToDisplay,
      toDate,
      toDateToDisplay,
    } = this.state;
    const {onSearchPressed, onSetNotificationAlertPressed} = this.props;
    return (
      <View style={styles.searchFieldMainView}>
        <View style={styles.searchFieldTopRow}>
          <View style={styles.searchFieldInputsView}>
            <View style={styles.searchFieldInputsRowView}>
              <View style={styles.searchFieldInputView}>
                <ModalSelector
                  data={data}
                  animationType="fade"
                  overlayStyle={{backgroundColor: colors.MODAL_OVERLAY_COLOR}}
                  accessible={true}
                  optionContainerStyle={{
                    backgroundColor: colors.BACKGROUND_COLOR_LIGHT,
                  }}
                  onChange={option => {
                    this.setState({from: option.label});
                  }}>
                  <Reinput label="From" value={from} />
                </ModalSelector>
              </View>
              <View style={styles.searchFieldSeparatorIconView}>
                <Icon
                  style={styles.searchFieldSeparatorIcon}
                  type="Entypo"
                  name="arrow-with-circle-right"
                />
              </View>
              <View style={styles.searchFieldInputView}>
                <ModalSelector
                  data={data}
                  animationType="fade"
                  overlayStyle={{backgroundColor: colors.MODAL_OVERLAY_COLOR}}
                  accessible={true}
                  optionContainerStyle={{
                    backgroundColor: colors.BACKGROUND_COLOR_LIGHT,
                  }}
                  onChange={option => {
                    this.setState({to: option.label});
                  }}>
                  <Reinput label="To" value={to} />
                </ModalSelector>
              </View>
            </View>
            <View style={styles.searchFieldInputsRowView}>
              <View style={styles.searchFieldInputView}>
                <ReinputButton
                  label="From date"
                  value={fromDateToDisplay}
                  onPress={() => {
                    this.showDatePicker(1);
                  }}
                />
              </View>
              <View style={styles.searchFieldSeparatorIconView}>
                <Icon
                  style={styles.searchFieldSeparatorIcon}
                  type="Entypo"
                  name="dots-two-vertical"
                />
              </View>
              <View style={styles.searchFieldInputView}>
                <ReinputButton
                  label="To date"
                  value={toDateToDisplay}
                  onPress={() => {
                    this.showDatePicker(2);
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.searchFieldSearchButtonView}>
            <Button
              rounded
              style={styles.searchFieldSearchButton}
              onPress={() =>
                onSearchPressed(
                  from,
                  to,
                  this.formatDate(fromDate),
                  this.formatDate(toDate),
                )
              }>
              <Icon
                style={styles.searchFieldSearchButtonIcon}
                type="FontAwesome"
                name="search"
              />
            </Button>
          </View>
        </View>
        <View style={styles.searchFieldBottomRow}>
          <Button
            rounded
            disabled={
              from === '' || to === '' || fromDate === '' || toDate === ''
            }
            style={{
              ...styles.searchFieldSetNotificationAlertButton,
              backgroundColor:
                from === '' || to === '' || fromDate === '' || toDate === ''
                  ? colors.ROUNDED_BUTTON_COLOR_DISABLED
                  : colors.ACCENT_COLOR,
            }}
            onPress={() =>
              onSetNotificationAlertPressed(
                from,
                to,
                this.formatDate(fromDate),
                this.formatDate(toDate),
              )
            }>
            <Text style={styles.searchFieldSetNotificationAlertButtonText}>
              Set Notification Alert
            </Text>
          </Button>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.handleCancel}
        />
      </View>
    );
  }
}

export default SearchField;
