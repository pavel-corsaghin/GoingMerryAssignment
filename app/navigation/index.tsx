import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import MainStack from './MainStack';

interface IProps {
  theme: Theme;
}

const Navigator: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigator;
