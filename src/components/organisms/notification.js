import React from 'react';
import {Text} from 'react-native';
import {View} from 'native-base';
import styles from '../../styles/styles';

export default class Notification extends React.PureComponent {
  render() {
    const {
      travelerName = 'Emin Ahmadov',
      travelOrigin = 'Baku',
      travelDestination = 'Budapest',
      travelDate = '2020-04-06',
    } = this.props;

    return (
      <View style={styles.notificationView}>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationMainText}>
            <Text style={styles.notificationBoldText}>{travelerName} </Text>
            is traveling{'\n'} from
            <Text style={styles.notificationBoldText}> {travelOrigin} </Text>
            to
            <Text style={styles.notificationBoldText}>
              {' '}
              {travelDestination}{' '}
            </Text>
            on
            <Text style={styles.notificationBoldText}> {travelDate} </Text>
          </Text>
        </View>
      </View>
    );
  }
}
