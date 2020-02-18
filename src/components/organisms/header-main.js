import React from 'react';
import {View, Text} from 'react-native';
import {Header, Left, Body, Right, Button, Icon} from 'native-base';
import colors from '../../styles/colors';
import styles from '../../styles/styles';

const HeaderMain = ({openDrawer}) => (
  <View style={{zIndex: 30}}>
    <Header style={{backgroundColor: colors.BACKGROUND_COLOR_LIGHT}}>
      <Left style={{flex: 1}}>
        <Button
          onPress={() => {
            openDrawer();
          }}
          transparent>
          <Icon style={styles.headerIcon} type="Entypo" name={'menu'} />
        </Button>
      </Left>
      <Body style={{alignItems: 'center', flex: 1}}>
        <Text style={styles.headerTitle}>Conveyor</Text>
      </Body>
      <Right style={{flex: 1}}>
        <Button onPress={() => {}} transparent>
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
