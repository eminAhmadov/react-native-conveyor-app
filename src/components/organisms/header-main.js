import React from 'react';
import {View, Text} from 'react-native';
import {Header, Left, Body, Right, Button, Icon} from 'native-base';

const HeaderMain = () => (
  <View>
    <Header>
      <Left>
        <Button onPress={() => {}} transparent>
          <Icon style={{color: 'orange'}} type="Entypo" name="menu" />
        </Button>
      </Left>
      <Body>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'orange',
          }}>
          Conveyor
        </Text>
      </Body>
      <Right>
        <Button onPress={() => {}} transparent>
          <Icon
            style={{color: 'orange'}}
            type="MaterialIcons"
            name="notifications-active"
          />
        </Button>
      </Right>
    </Header>
  </View>
);

export default HeaderMain;
