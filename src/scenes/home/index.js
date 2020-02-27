import React from 'react';
import {ScrollView} from 'react-native';
import TravelPromo from '../../components/organisms/travel-promo';
import {View, Drawer} from 'native-base';
import HeaderMain from '../../components/organisms/header-main';
import Sidebar from '../sidebar';
import styles from '../../styles/styles';

export default class HomeScreen extends React.Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    const {navigation} = this.props;
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()}>
        <View style={styles.homeScreenMainView}>
          <HeaderMain navigation={navigation} openDrawer={this.openDrawer} />
          <ScrollView
            style={styles.homeScreenScrollView}
            contentContainerStyle={styles.homeScreenScrollViewContainer}>
            <TravelPromo />
            <TravelPromo />
            <TravelPromo />
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}
