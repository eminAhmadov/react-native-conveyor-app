import React from 'react';
import {View} from 'react-native';
import {Drawer} from 'native-base';
import HeaderMain from '../../components/organisms/header-main';
import SearchField from '../../components/organisms/search-field';
import {ScrollView} from 'react-native-gesture-handler';
import TravelPromo from '../../components/organisms/travel-promo';
import Sidebar from '../sidebar';

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
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#45beff',
          }}>
          <HeaderMain navigation={navigation} openDrawer={this.openDrawer} />
          <SearchField />
          <ScrollView
            style={{height: '74%'}}
            contentContainerStyle={{alignItems: 'center'}}>
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
