import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { MainStackProps } from 'app/navigation/@types';

const Detail: React.FC<MainStackProps<'Detail'>> = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;
