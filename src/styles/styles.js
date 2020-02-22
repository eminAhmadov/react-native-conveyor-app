import {StyleSheet, Platform} from 'react-native';
import colors from './colors';
import {scaleSize, boxShadow} from './mixins';

const isIos = Platform.OS === 'ios';

const commonRoundedButton = {
  borderRadius: 20,
  justifyContent: 'center',
  backgroundColor: colors.ROUNDED_BUTTON_COLOR,
};

const commonRoundedButtonText = {
  fontSize: scaleSize(18),
  textAlign: 'center',
  fontWeight: 'bold',
  color: colors.ROUNDED_BUTTON_TEXT,
};

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
  headerView: {
    zIndex: 30,
  },
  headerLeft: {
    flex: 1,
  },
  headerBody: {
    alignItems: 'center',
    flex: 1,
  },
  headerReght: {
    flex: 1,
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
  searchFieldMainView: {
    height: scaleSize(150),
    width: '100%',
    backgroundColor: colors.BACKGROUND_COLOR_LIGHT,
    borderTopColor: colors.BORDER_COLOR_LIGHT,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    ...boxShadow(colors.BOX_SHADOW_COLOR),
    borderTopWidth: isIos ? 0 : 0.5,
  },
  searchFieldTopRow: {
    height: '70%',
    width: '100%',
    flexDirection: 'row',
  },
  searchFieldBottomRow: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: scaleSize(3),
  },
  searchFieldInputsView: {
    height: '100%',
    width: '80%',
    paddingHorizontal: '2%',
  },
  searchFieldInputsRowView: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: '2%',
  },
  searchFieldInputView: {
    flexDirection: 'column',
    width: '40%',
  },
  searchFieldSeparatorIconView: {
    flexDirection: 'column',
    width: '20%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  searchFieldSeparatorIcon: {
    textAlign: 'center',
    color: colors.ACCENT_COLOR,
  },
  searchFieldSearchButtonView: {
    height: '100%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchFieldSearchButton: {
    width: scaleSize(50),
    height: scaleSize(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ACCENT_COLOR,
  },
  searchFieldSearchButtonIcon: {
    fontSize: scaleSize(21),
    marginBottom: 4,
  },
  searchFieldSetNotificationAlertButton: {
    ...commonRoundedButton,
    height: scaleSize(35),
    width: '65%',
  },
  searchFieldSetNotificationAlertButtonText: {
    ...commonRoundedButtonText,
  },
};

export default StyleSheet.create(styles);
