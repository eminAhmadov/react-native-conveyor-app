import React from 'react';
import {View, SectionList} from 'react-native';
import {Drawer} from 'native-base';
import {connect} from 'react-redux';
import HeaderMain from '../../components/organisms/header-main';
import SearchField from '../../components/organisms/search-field';
import {ScrollView} from 'react-native-gesture-handler';
import TravelPromo from '../../components/organisms/travel-promo';
import Sidebar from '../sidebar';
import LoadMore from '../../components/organisms/load-more';
import styles from '../../styles/styles';
import travelService from '../../services/travel/service';
import notificationService from '../../services/notification/service';

const userImageMale = require('../../assets/images/user_male.png');
const userImageFemale = require('../../assets/images/user_female.png');

class SearchScreen extends React.Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  onSearchPressed = () => {
    this.setState(
      {
        list: [{title: '0', data: []}],
        offset: 0,
      },
      () => {
        this.fetchResult();
      },
    );
  };

  onSetNotificationAlertPressed = () => {
    const {origin, destination, fromDate, toDate} = this.state;
    const {user} = this.props;
    notificationService
      .createNotificationAlert(user._id, origin, destination, fromDate, toDate)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          res.json().then(resJson => {
            console.log(resJson);
            alert(`Successfully set an alert with id: ${resJson.id}`);
          });
        } else {
          res.json().then(resJson => console.log(resJson.error));
          alert('Could not create an alert.');
        }
      })
      .catch(err => {
        console.log(err);
        alert('Could not create an alert.');
      });
  };

  fetchResult = () => {
    const {origin, destination, fromDate, toDate} = this.state;
    this.setState(
      {
        isFetching: true,
      },
      () => {
        if (fromDate === '') {
          if (toDate === '') {
            this.search(origin, destination);
          } else {
            this.searchUntilDate(origin, destination, toDate);
          }
        } else {
          if (toDate === '') {
            this.searchFromDate(origin, destination, fromDate);
          } else {
            this.searchBetweenDates(origin, destination, fromDate, toDate);
          }
        }
      },
    );
  };

  search = (origin, destination) => {
    const {offset, limit, list} = this.state;
    console.log(offset);
    travelService
      .searchTravels(origin, destination, offset, limit)
      .then(res => {
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
  };

  searchUntilDate = (origin, destination, toDate) => {
    const {offset, limit, list} = this.state;
    travelService
      .searchTravelsToDate(origin, destination, toDate, offset, limit)
      .then(res => {
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
  };

  searchFromDate = (origin, destination, fromDate) => {
    const {offset, limit, list} = this.state;
    console.log(offset);
    travelService
      .searchTravelsFromDate(origin, destination, fromDate, offset, limit)
      .then(res => {
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
  };

  searchBetweenDates = (origin, destination, fromDate, toDate) => {
    const {offset, limit, list} = this.state;
    travelService
      .searchTravelsBetweenDates(
        origin,
        destination,
        fromDate,
        toDate,
        offset,
        limit,
      )
      .then(res => {
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
  };

  state = {
    list: [{title: '0', data: []}],
    offset: 0,
    limit: 10,
    isFetching: false,
    hasMoreToLoad: false,
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
        <View style={styles.searchScreenMainView}>
          <HeaderMain navigation={navigation} openDrawer={this.openDrawer} />
          <SearchField
            onSearchPressed={(origin, destination, fromDate, toDate) => {
              this.setState(
                {
                  origin: origin,
                  destination: destination,
                  fromDate: fromDate,
                  toDate: toDate,
                },
                () => {
                  this.onSearchPressed();
                },
              );
            }}
            onSetNotificationAlertPressed={(
              origin,
              destination,
              fromDate,
              toDate,
            ) => {
              this.setState(
                {
                  origin: origin,
                  destination: destination,
                  fromDate: fromDate,
                  toDate: toDate,
                },
                () => {
                  this.onSetNotificationAlertPressed();
                },
              );
            }}
          />
          <ScrollView
            style={styles.searchScreenScrollViewStyle}
            contentContainerStyle={styles.searchScreenScrollViewContainerStyle}>
            <SectionList
              contentContainerStyle={
                styles.searchScreenScrollViewContainerStyle
              }
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

const mapStateToProps = state => {
  const {user} = state;
  return {user};
};

export default connect(mapStateToProps)(SearchScreen);
