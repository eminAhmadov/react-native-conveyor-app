import {createStackNavigator} from 'react-navigation-stack';

import NotificationsScreen from '../scenes/notifications';

const NotificationsNavigatorConfig = {
  initialRouteName: 'Notifications',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Notifications: NotificationsScreen,
};

const NotificationsNavigator = createStackNavigator(
  RouteConfigs,
  NotificationsNavigatorConfig,
);

export default NotificationsNavigator;
