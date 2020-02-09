import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../scenes/login';
import RegistrationScreen from '../scenes/registration';
import TravelScreen from '../scenes/travel';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: LoginScreen,
  Registration: RegistrationScreen,
  Travel: TravelScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
