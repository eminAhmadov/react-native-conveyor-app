import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../scenes/login';
import RegistrationScreen from '../scenes/registration';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: LoginScreen,
  Registration: RegistrationScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
