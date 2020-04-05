import React from 'react';
import {ScrollView, SectionList} from 'react-native';
import {connect} from 'react-redux';
import Notification from '../../components/organisms/notification';
import {View} from 'native-base';
import styles from '../../styles/styles';
import notificationService from '../../services/notification/service';
import HeaderNotification from '../../components/organisms/header-notification';
import LoadMore from '../../components/organisms/load-more';

class NotificationsScreen extends React.Component {
  initialState = {
    list: [{title: '0', data: []}],
    offset: 0,
    limit: 10,
    isFetching: false,
    hasMoreToLoad: true,
  };

  componentDidMount() {
    this.fetchResult();
  }

  componentWillUmount() {}

  fetchResult = () => {
    const {user} = this.props;
    const {offset, limit, list} = this.state;
    this.setState(
      {
        isFetching: true,
      },
      () => {
        notificationService
          .listAllNotifications(user._id, offset, limit)
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
      },
    );
  };

  state = {
    ...this.initialState,
  };

  render() {
    const {list, isFetching, hasMoreToLoad} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.notificationsScreenMainView}>
        <HeaderNotification onBackPressed={() => navigation.navigate('Home')} />
        <ScrollView
          style={styles.notificationsScreenScrollView}
          contentContainerStyle={styles.notificationsScreenScrollViewContainer}>
          <SectionList
            contentContainerStyle={
              styles.notificationsScreenSectionListContainer
            }
            renderItem={({item}) => (
              <Notification
                travelerName={item.travelerName}
                travelOrigin={item.travelOrigin}
                travelDestination={item.travelDestination}
                travelDate={item.travelDate}
              />
            )}
            keyExtractor={item => item.pushNotId}
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
    );
  }
}

const mapStateToProps = state => {
  const {user} = state;
  return {user};
};

export default connect(mapStateToProps)(NotificationsScreen);
