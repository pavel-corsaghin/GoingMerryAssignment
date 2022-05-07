import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { MainStackParamList, MainStackRoute } from './@types';
import MainTabBar from './MainTabBar';
import DetailScreen from '../screens/Detail';
import i18next from 'i18next';

type Screen = {
  name: MainStackRoute;
  component: React.ComponentType<any>;
  options: StackNavigationOptions;
};

const Stack = createStackNavigator<MainStackParamList>();
const screens: Screen[] = [
  {
    name: 'Main',
    component: MainTabBar,
    options: {
      headerShown: false,
      title: '',
    },
  },
  {
    name: 'Detail',
    component: DetailScreen,
    options: {
      title: i18next.t('detail'),
    },
  },
];

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  );
}

export default MainStack;
