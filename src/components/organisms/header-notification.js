import React from 'react';
import {View, Text} from 'react-native';
import {Header, Left, Body, Right, Button, Icon} from 'native-base';
import styles from '../../styles/styles';

const HeaderNotification = ({onBackPressed}) => (
  <View style={styles.headerView}>
    <Header style={styles.header}>
      <Left style={styles.headerLeft}>
        <Button style={{marginLeft: '5%'}} onPress={onBackPressed} transparent>
          <Icon
            style={styles.headerIcon}
            type="Ionicons"
            name={'ios-arrow-back'}
          />
        </Button>
      </Left>
      <Body style={styles.headerBody}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </Body>
      <Right style={styles.headerReght} />
    </Header>
  </View>
);

export default HeaderNotification;
