import { Alert, Linking } from 'react-native';
import i18next from 'i18next';

export const openURL = async (url: string) => {
  const canOpen = await Linking.canOpenURL(url);
  if (canOpen) {
    Linking.openURL(url);
  } else {
    Alert.alert(i18next.t('err_open_url'));
  }
};
