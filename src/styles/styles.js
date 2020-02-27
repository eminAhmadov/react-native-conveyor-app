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

const commonScreenMainView = {
  height: '100%',
  width: '100%',
  backgroundColor: colors.BACKGROUND_COLOR,
};

const commonScreenMainViewLight = {
  height: '100%',
  width: '100%',
  backgroundColor: colors.BACKGROUND_COLOR_LIGHT,
};

const commonTextButtonContainer = {
  borderBottomColor: colors.TEXT_BUTTON_COLOR,
  borderBottomWidth: 1,
};

const styles = {
  fullScreenViewRow: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeScreenMainView: {
    ...commonScreenMainView,
  },
  homeScreenScrollView: {
    width: '100%',
  },
  homeScreenScrollViewContainer: {
    alignItems: 'center',
  },
  loginScreenMainView: {
    ...commonScreenMainViewLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreenContentView: {
    height: scaleSize(480),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginScreenLogoImage: {
    width: '50%',
  },
  loginScreenInputsView: {
    width: '80%',
  },
  loginScreenButtonsView: {
    width: '100%',
    alignItems: 'center',
  },
  loginScreenLoginButton: {
    ...commonRoundedButton,
    width: '50%',
  },
  loginScreenLoginButtonText: {
    ...commonRoundedButtonText,
  },
  loginScreenRegisterButton: {
    ...commonTextButtonContainer,
    height: 35,
    marginTop: 10,
  },
  loginScreenRegisterButtonText: {
    color: colors.TEXT_BUTTON_COLOR,
  },
  registrationScreenMainView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registrationScreenContentView: {
    marginVertical: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  registrationScreenLogoImageStyle: {
    width: '50%',
  },
  registrationScreenInputFieldsView: {
    width: '80%',
  },
  registrationSreenButtonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  registrationScreenRegisterButton: {
    ...commonRoundedButton,
    width: '60%',
  },
  registrationScreenRegisterButtonText: {
    ...commonRoundedButtonText,
  },
  registrationScreenCancelButton: {
    ...commonTextButtonContainer,
    height: 35,
    marginTop: 10,
  },
  registrationScreenCancelButtonText: {
    color: colors.TEXT_BUTTON_COLOR,
  },
  searchScreenMainView: {
    ...commonScreenMainView,
  },
  searchScreenScrollViewStyle: {
    height: '74%',
  },
  searchScreenScrollViewContainerStyle: {
    alignItems: 'center',
  },
  sidebarContainer: {
    backgroundColor: colors.BACKGROUND_COLOR_LIGHT,
    paddingTop: 40,
  },
  sidebarListItemIcon: {
    fontSize: 22,
  },
  userPromoImage: {
    height: '80%',
    width: '40%',
  },
  userPromoName: {
    fontSize: 20,
    fontWeight: '600',
  },
  header: {
    backgroundColor: colors.BACKGROUND_COLOR_LIGHT,
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
  travelPromoView: {
    width: '95%',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: colors.BORDER_COLOR_DARK,
    backgroundColor: colors.BACKGROUND_COLOR_LIGHT,
    marginVertical: 4,
  },
  travelPromoVisibleView: {
    height: scaleSize(100),
    flexDirection: 'row',
    alignItems: 'center',
  },
  travelPromoUserImageView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  travelPromoUserImage: {
    width: '80%',
    height: '80%',
  },
  travelPromoDataView: {
    width: '50%',
    paddingHorizontal: '5%',
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  travelPromoExpandButtonView: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  travelPromoExpandButton: {
    fontSize: 35,
    color: colors.ACCENT_COLOR,
  },
  travelPromoHiddenView: {
    width: '90%',
    alignSelf: 'center',
    padding: '2.5%',
  },
  travelPromoDetailsRow: {
    borderBottomWidth: 1,
    borderColor: colors.BORDER_COLOR_DARK,
    paddingVertical: '2.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  travelPromoDetailsLastRow: {
    paddingVertical: '2.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  travelPromoDetailsCommentText: {
    width: '60%',
  },
};

export default StyleSheet.create(styles);
