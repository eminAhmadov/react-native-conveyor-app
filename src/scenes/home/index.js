import React from 'react';
import {ScrollView, FlatList} from 'react-native';
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

  componentDidMount() {
    this.fetchResult();
  }

  fetchResult = () => {
    this.setState({
      list: [
        {
          userId: 'f12bc48b-48fe-4683-820e-8ef8b7826d13',
          id: 22,
          name: 'Emin Ahmadov',
          origin: 'Baku',
          destination: 'Toronto',
          comment: 'Two bags',
          date: '2020-10-21',
          facebook: 'fb.com/ahmadovemin',
          instagram: null,
          mobile: '+36202704921',
          addedOn: '2020-03-04T15:12:54',
        },
        {
          userId: 'f12bc48b-48fe-4683-820e-8ef8b7826d13',
          id: 21,
          name: 'Emin Ahmadov',
          origin: 'Baku',
          destination: 'Toronto',
          comment: 'Two bags',
          date: '2020-09-21',
          facebook: 'fb.com/ahmadovemin',
          instagram: 'akhmedovemin',
          mobile: '+36202704921',
          addedOn: '2020-03-04T15:12:49',
        },
        {
          userId: 'f12bc48b-48fe-4683-820e-8ef8b7826d13',
          id: 20,
          name: 'Emin Ahmadov',
          origin: 'Baku',
          destination: 'Toronto',
          comment: 'Two bags',
          date: '2020-08-21',
          facebook: 'fb.com/ahmadovemin',
          instagram: 'akhmedovemin',
          mobile: null,
          addedOn: '2020-03-04T15:12:46',
        },
        {
          userId: 'f12bc48b-48fe-4683-820e-8ef8b7826d13',
          id: 19,
          name: 'Emin Ahmadov',
          origin: 'Baku',
          destination: 'Toronto',
          comment: 'Two bags',
          date: '2020-07-21',
          facebook: null,
          instagram: 'akhmedovemin',
          mobile: '+36202704921',
          addedOn: '2020-03-04T15:12:38',
        },
        {
          userId: 'f12bc48b-48fe-4683-820e-8ef8b7826d13',
          id: 18,
          name: 'Emin Ahmadov',
          origin: 'Baku',
          destination: 'Toronto',
          comment: null,
          date: '2020-05-21',
          facebook: 'fb.com/ahmadovemin',
          instagram: 'akhmedovemin',
          mobile: '+36202704921',
          addedOn: '2020-03-04T15:12:32',
        },
      ],
    });

    // const {offset, limit, list} = this.state;
    // fetchModeDateFromAPI(offset, limit).then(res => {
    //   if (!res.list) {
    //     return;
    //   }
    //   this.setState({
    //     list: list.concat(res.list),
    //     offset: offset + 100,
    //     limit: limit,
    //   });
    // });
  };

  state = {list: [], offset: 0, limit: 5};

  genereatePromoData = item => {
    const {name, origin, destination, date} = item;

    const data = {
      name: name,
      travelFrom: origin,
      travelTo: destination,
      date: date,
    };

    return data;
  };

  genereteDetailsData = item => {
    const {comment, facebook, instagram, mobile} = item;

    const data = {
      comment: comment,
      facebook: facebook,
      instagram: instagram,
      mobile: mobile,
    };

    return data;
  };

  render() {
    const {list, offset, limit} = this.state;
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
            <FlatList
              contentContainerStyle={{
                alignItems: 'center',
                width: '100%',
              }}
              extraData={this.state}
              // onEndReached={this.fetchResult}
              // onEndReachedThreshold={0.7}
              data={list}
              renderItem={({item}) => (
                <TravelPromo
                  // userImage={this.getUserImage}
                  promoData={this.genereatePromoData(item)}
                  detailsData={this.genereteDetailsData(item)}
                />
              )}
              keyExtractor={item => item.id.toString()}
            />
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}
