import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {View, Icon} from 'native-base';
import styles from '../../styles/styles';

const defaultUserImage = require('../../assets/images/user.png');

export default class TravelPromo extends React.PureComponent {
  state = {showDetails: false};

  render() {
    const {showDetails} = this.state;
    const {
      userImage = defaultUserImage,
      promoData = {
        name: 'Emin Ahmadov',
        travelFrom: 'Baku',
        travelTo: 'Budapest',
        date: '4 June 2020',
      },
      detailsData = {
        comment:
          'I am travilling with two big bags from Budapest Liszt Ferenc Airport. Able to take some light stuff with me. WIll have extra 2 kg.',
        facebook: 'fb.com/eminAhmadov',
        instagram: '@akhmedovemin',
        mobile: '+36-20-2704921',
      },
    } = this.props;

    return (
      <View style={styles.travelPromoView}>
        <View style={styles.travelPromoVisibleView}>
          <View style={styles.travelPromoUserImageView}>
            <Image
              style={styles.travelPromoUserImage}
              resizeMode="contain"
              source={userImage}
            />
          </View>
          <View style={styles.travelPromoDataView}>
            <Text>{promoData.name}</Text>
            <Text>
              {promoData.travelFrom} -> {promoData.travelTo}
            </Text>
            <Text>{promoData.date}</Text>
          </View>
          <View style={styles.travelPromoExpandButtonView}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  showDetails: !showDetails,
                });
              }}>
              <Icon
                style={styles.travelPromoExpandButton}
                type="Entypo"
                name={
                  showDetails
                    ? 'arrow-with-circle-up'
                    : 'arrow-with-circle-down'
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        {showDetails && (
          <View style={styles.travelPromoHiddenView}>
            <View style={styles.travelPromoDetailsRow}>
              <Text>Comment:</Text>
              <Text style={styles.travelPromoDetailsCommentText}>
                {detailsData.comment ? detailsData.comment : 'No comment'}
              </Text>
            </View>
            <View style={styles.travelPromoDetailsRow}>
              <Text>Facebook:</Text>
              <Text>
                {detailsData.facebook ? detailsData.facebook : 'Hidden'}
              </Text>
            </View>
            <View style={styles.travelPromoDetailsRow}>
              <Text>Instagram:</Text>
              <Text>
                {detailsData.instagram ? detailsData.instagram : 'Hidden'}
              </Text>
            </View>
            <View style={styles.travelPromoDetailsLastRow}>
              <Text>Mobile:</Text>
              <Text>{detailsData.mobile ? detailsData.mobile : 'Hidden'}</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}
