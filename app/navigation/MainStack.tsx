import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { MainStackParamList, MainStackRoute } from './@types';
import MainTabBar from './MainTabBar';
import DetailScreen from 'app/screens/Detail';

type Screen = {
  name: MainStackRoute;
  title: string;
  component: React.ComponentType<any>;
  options: StackNavigationOptions;
};

const Stack = createStackNavigator<MainStackParamList>();
const screens: Screen[] = [
  {
    name: 'Main',
    title: ' ',
    component: MainTabBar,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Detail',
    title: ' ',
    component: DetailScreen,
    options: {
      headerShown: false,
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
