import React from 'react';
import {Text} from 'react-native';
import {Container, List, ListItem, Left, Body, Icon} from 'native-base';

export default class Sidebar extends React.Component {
  render() {
    const {
      goToProfileSettings,
      goToPushnotAlertSettings,
      goToPizza,
    } = this.props;
    return (
      <Container
        style={{
          backgroundColor: 'white',
          paddingTop: 40,
        }}>
        <List>
          <ListItem itemDivider>
            <Text>Settings</Text>
          </ListItem>
          <ListItem button onPress={goToProfileSettings}>
            <Left>
              <Icon
                type="MaterialCommunityIcons"
                name="settings"
                style={{fontSize: 22}}
              />
            </Left>
            <Body>
              <Text>Profile</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={goToPushnotAlertSettings}>
            <Left>
              <Icon
                type="Ionicons"
                name="md-notifications"
                style={{fontSize: 22}}
              />
            </Left>
            <Body>
              <Text>Notification Alerts</Text>
            </Body>
          </ListItem>
          <ListItem itemDivider>
            <Text>App</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Icon type="Entypo" name="log-out" style={{fontSize: 22}} />
            </Left>
            <Body>
              <Text>Log Out</Text>
            </Body>
          </ListItem>
        </List>
      </Container>
    );
  }
}
