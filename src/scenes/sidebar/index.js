import React from 'react';
import {Text} from 'react-native';
import {Container, List, ListItem, Left, Body, Icon} from 'native-base';
import styles from '../../styles/styles';

export default class Sidebar extends React.Component {
  render() {
    const {goToProfileSettings, goToPushnotAlertSettings, logOut} = this.props;
    return (
      <Container style={styles.sidebarContainer}>
        <List>
          <ListItem itemDivider>
            <Text>Settings</Text>
          </ListItem>
          <ListItem button onPress={goToProfileSettings}>
            <Left>
              <Icon
                type="MaterialCommunityIcons"
                name="settings"
                style={styles.sidebarListItemIcon}
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
                style={styles.sidebarListItemIcon}
              />
            </Left>
            <Body>
              <Text>Notification Alerts</Text>
            </Body>
          </ListItem>
          <ListItem itemDivider>
            <Text>App</Text>
          </ListItem>
          <ListItem button onPress={logOut}>
            <Left>
              <Icon
                type="Entypo"
                name="log-out"
                style={styles.sidebarListItemIcon}
              />
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
