import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import MainStack from './MainStack';

type Props = {
  theme: Theme;
};

const Navigator: React.FC<Props> = ({ theme }) => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigator;
