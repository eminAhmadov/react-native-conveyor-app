import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {View, Icon} from 'native-base';
import {scaleSize} from '../../styles/mixins';

const userImage = require('../../assets/images/user.png');

export default class TravelPromo extends React.PureComponent {
  state = {showDetails: false};

  render() {
    const {showDetails} = this.state;
    const {navigation} = this.props;

    return (
      <View
        style={{
          width: '95%',
          borderRadius: 20,
          borderWidth: 5,
          borderColor: '#008bdb',
          backgroundColor: 'white',
          marginVertical: 4,
        }}>
        <View
          style={{
            height: scaleSize(100),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: scaleSize(100),
              width: '30%',
            }}>
            <Image
              style={{width: '80%', height: '80%'}}
              resizeMode="contain"
              source={userImage}
            />
          </View>
          <View
            style={{
              height: scaleSize(45),
              width: '50%',
              paddingHorizontal: '5%',
              alignSelf: 'center',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <Text>Emin Ahmadov</Text>
            <Text>Baku -> Budapest</Text>
            <Text>4 June 2020</Text>
          </View>
          <View
            style={{
              height: scaleSize(100),
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  showDetails: !showDetails,
                });
              }}>
              <Icon
                style={{fontSize: 35, color: 'orange'}}
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
          <View style={{width: '90%', alignSelf: 'center', padding: '2.5%'}}>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#008bdb',
                paddingVertical: '2.5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Comment:</Text>
              <Text style={{width: '60%'}}>
                I am travilling with two big bags from Budapest Liszt Ferenc
                Airport. Able to take some light stuff with me. WIll have extra
                2 kg.
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#008bdb',
                paddingVertical: '2.5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Facebook:</Text>
              <Text>fb.com/eminAhmadov</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#008bdb',
                paddingVertical: '2.5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Instagram:</Text>
              <Text>@akhmedovemin</Text>
            </View>
            <View
              style={{
                paddingVertical: '2.5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Mobile:</Text>
              <Text>+36-20-2704921</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}
