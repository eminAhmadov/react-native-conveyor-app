import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {View} from 'native-base';
import styles from '../../styles/styles';
import colors from '../../styles/colors';

const LoadMore = ({
  isLoading = false,
  hasMoreToLoad = true,
  onLoadPressed = () => {},
}) => (
  <View style={styles.loadMoreView}>
    {isLoading ? (
      <View>
        <ActivityIndicator size="large" color={colors.ACCENT_COLOR} />
      </View>
    ) : hasMoreToLoad ? (
      <View style={styles.loadMoreTextWrapper}>
        <Text style={styles.loadMoreText} onPress={onLoadPressed}>
          Load More
        </Text>
      </View>
    ) : (
      <Text style={styles.loadMoreText} onPress={onLoadPressed}>
        No more to load
      </Text>
    )}
  </View>
);

export default LoadMore;
