import React from 'react';
import {View} from 'react-native';
import {Drawer} from 'native-base';
import HeaderMain from '../../components/organisms/header-main';
import SearchField from '../../components/organisms/search-field';
import {ScrollView} from 'react-native-gesture-handler';
import TravelPromo from '../../components/organisms/travel-promo';
import Sidebar from '../sidebar';
import styles from '../../styles/styles';

export default class SearchScreen extends React.Component {
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
        <View style={styles.searchScreenMainView}>
          <HeaderMain navigation={navigation} openDrawer={this.openDrawer} />
          <SearchField />
          <ScrollView
            style={styles.searchScreenScrollViewStyle}
            contentContainerStyle={styles.searchScreenScrollViewContainerStyle}>
            <TravelPromo />
            <TravelPromo />
            <TravelPromo />
            <TravelPromo />
            <TravelPromo />
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}
