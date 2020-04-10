import React from 'react';
import {Text} from 'react-native';
import {Container, List, ListItem, Left, Body, Icon} from 'native-base';
import {logOut} from '../../store/actions';
import {connect} from 'react-redux';
import styles from '../../styles/styles';

class Sidebar extends React.Component {
  logOut = () => {
    const {onLogOut, navigation} = this.props;
    onLogOut();
    navigation.navigate('Login');
  };

  render() {
    return (
      <Container style={styles.sidebarContainer}>
        <List>
          <ListItem itemDivider>
            <Text>App</Text>
          </ListItem>
          <ListItem button onPress={this.logOut}>
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

const mapDispatchToProps = dispatch => ({
  onLogOut: () => {
    dispatch(logOut());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Sidebar);
