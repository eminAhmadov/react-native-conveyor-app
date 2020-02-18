import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = {
  fullScreenViewRow: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPromoImage: {
    height: '80%',
    width: '40%',
  },
  userPromoName: {
    fontSize: 20,
    fontWeight: '600',
  },

  headerIcon: {
    color: colors.ACCENT_COLOR,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.ACCENT_COLOR,
  },
};

export default StyleSheet.create(styles);
