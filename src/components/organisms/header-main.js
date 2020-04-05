import React from 'react';
import {View, Text} from 'react-native';
import {Header, Left, Body, Right, Button, Icon} from 'native-base';
import styles from '../../styles/styles';

const HeaderMain = ({openDrawer, navigation}) => (
  <View style={styles.headerView}>
    <Header style={styles.header}>
      <Left style={styles.headerLeft}>
        <Button
          onPress={() => {
            openDrawer();
          }}
          transparent>
          <Icon style={styles.headerIcon} type="Entypo" name={'menu'} />
        </Button>
      </Left>
      <Body style={styles.headerBody}>
        <Text style={styles.headerTitle}>Conveyor</Text>
      </Body>
      <Right style={styles.headerReght}>
        <Button
          onPress={() => {
            navigation.navigate('Notifications');
          }}
          transparent>
          <Icon
            style={styles.headerIcon}
            type="MaterialIcons"
            name="notifications-active"
          />
        </Button>
      </Right>
    </Header>
  </View>
);

export default HeaderMain;
