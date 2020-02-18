import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../../styles/styles';

const UserPromo = ({image, name}) => (
  <View style={styles.fullScreenViewRow}>
    <Image style={styles.userPromoImage} resizeMode="contain" source={image} />
    <Text style={styles.userPromoName}>{name}</Text>
  </View>
);

export default UserPromo;
