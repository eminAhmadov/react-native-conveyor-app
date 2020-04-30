import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Platform} from 'react-native';
import {Icon} from 'native-base';

import HomeScreen from '../scenes/home';
import PostScreen from '../scenes/post';
import SearchScreen from '../scenes/search';
import colors from '../styles/colors';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
  tabBarOptions: {
    activeTintColor: colors.ACCENT_COLOR, // Color of tab when pressed
    inactiveTintColor: colors.ROUNDED_BUTTON_COLOR_DISABLED, // Color of tab when not pressed
    showIcon: 'true', // Shows an icon for both iOS and Android
    showLabel: 'true', //No label for Android
    labelStyle: {
      fontSize: 11,
    },
    style: {
      paddingTop: 2,
      backgroundColor: colors.NAVIGATION_BAR_BACKGROUND_COLOR, // Makes Android tab bar white instead of standard blue
      height: Platform.OS === 'ios' ? 48 : 50, // I didn't use this in my app, so the numbers may be off.
    },
  },
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon type="Entypo" name="home" size={15} style={{color: tintColor}} />
      ),
    },
  },
  Post: {
    screen: PostScreen,
    navigationOptions: {
      tabBarLabel: 'Post',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type="MaterialIcons"
          name="add-circle-outline"
          size={15}
          style={{color: tintColor}}
        />
      ),
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type="FontAwesome"
          name="search"
          size={15}
          style={{color: tintColor}}
        />
      ),
    },
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
