import React from 'react';
import {ScrollView, SectionList} from 'react-native';
import TravelPromo from '../../components/organisms/travel-promo';
import {View, Drawer} from 'native-base';
import HeaderMain from '../../components/organisms/header-main';
import Sidebar from '../sidebar';
import styles from '../../styles/styles';
import travelService from '../../services/travel/service';
import LoadMore from '../../components/organisms/load-more';

const userImageMale = require('../../assets/images/user_male.png');
const userImageFemale = require('../../assets/images/user_female.png');
export default class HomeScreen extends React.Component {
  initialState = {
    list: [{title: '0', data: []}],
    offset: 0,
    limit: 10,
    isFetching: false,
    hasMoreToLoad: true,
  };

  componentDidMount() {
    this.fetchResult();
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      this.didFocusAction,
    );
  }

  componentWillUmount() {
    this.didFocusSubscription.remove();
  }

  didFocusAction = () => {
    this.setState(
      {
        ...this.initialState,
      },
      () => {
        this.fetchResult();
      },
    );
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  fetchResult = () => {
    const {offset, limit, list} = this.state;
    this.setState(
      {
        isFetching: true,
      },
      () => {
        travelService.listAllTravels(offset, limit).then(res => {
          console.log(res);
          if (res.length <= 0) {
            this.setState({
              isFetching: false,
              hasMoreToLoad: false,
            });
            return;
          }
          this.setState(
            {
              list: list.concat([{title: offset.toString(), data: res}]),
              offset: offset + 1,
              hasMoreToLoad: true,
            },
            () => {
              this.setState({
                isFetching: false,
              });
            },
          );
        });
      },
    );
  };

  state = {
    ...this.initialState,
  };

  getUserImage = item => {
    const {gender} = item;

    if (gender === 'female') {
      return userImageFemale;
    }
    return userImageMale;
  };

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
    const {list, isFetching, hasMoreToLoad} = this.state;
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
            <SectionList
              contentContainerStyle={styles.homeScreenScrollViewContainer}
              renderItem={({item}) => (
                <TravelPromo
                  userImage={this.getUserImage(item)}
                  promoData={this.genereatePromoData(item)}
                  detailsData={this.genereteDetailsData(item)}
                />
              )}
              keyExtractor={item => item.id.toString()}
              sections={list}
            />
            <LoadMore
              isLoading={isFetching}
              hasMoreToLoad={hasMoreToLoad}
              onLoadPressed={() => {
                if (isFetching) {
                  return;
                }
                this.fetchResult();
              }}
            />
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}
