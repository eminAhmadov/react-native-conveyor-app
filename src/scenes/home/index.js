import React from 'react';
import {ScrollView} from 'react-native';
import TravelPromo from '../../components/organisms/travel-promo';
import {View, Drawer} from 'native-base';
import HeaderMain from '../../components/organisms/header-main';
import Sidebar from '../sidebar';

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
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#45beff',
          }}>
          <HeaderMain navigation={navigation} openDrawer={this.openDrawer} />
          <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            <TravelPromo navigation={navigation} />
            <TravelPromo navigation={navigation} />
            <TravelPromo navigation={navigation} />
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}
