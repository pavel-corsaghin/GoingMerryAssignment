import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Main Tab Bar Navigation props
export type MainTabBarParamList = {
  Home: undefined;
  Bookmark: undefined;
};
export type MainTabBarRoute = keyof MainTabBarParamList;
export type MainTabBarProp = {
  navigation: BottomTabNavigationProp<MainTabBarParamList>;
};

// Main Stack Navigation props
export type MainStackParamList = {
  Main: undefined;
  Detail: { id: string };
};
export type MainStackRoute = keyof MainStackParamList;
export type MainStackNavigation = StackNavigationProp<MainStackParamList>;
export type MainStackProps<T extends MainStackRoute> = {
  route: RouteProp<MainStackParamList, T>;
  navigation: StackNavigationProp<MainStackParamList>;
};
