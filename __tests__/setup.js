import ReactNative from 'react-native';
import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Below mock is needed by react-native-firebase to work with jest
jest.doMock('react-native', () => {
  return Object.setPrototypeOf(
    {
      NativeModules: {
        ...ReactNative.NativeModules,
        RNFBAppModule: {
          NATIVE_FIREBASE_APPS: [
            {
              appConfig: {
                name: '[DEFAULT]',
              },
              options: {},
            },
            {
              appConfig: {
                name: 'secondaryFromNative',
              },
              options: {},
            },
          ],
        },
        RNFBPerfModule: {},
        RNFBAdMobModule: {},
        RNFBAdMobInterstitialModule: {},
        RNFBAdMobRewardedModule: {},
        RNFBAdsConsentModule: {},
        RNFBCrashlyticsModule: {},
      },
    },
    ReactNative,
  );
});

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, left: 0, right: 0, bottom: 0 }),
}));
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => jest.fn(),
  };
});
