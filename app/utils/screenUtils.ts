/**
 * Helper class to provide utities variables or functions related to device screen
 */
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 54 : 66,
};
