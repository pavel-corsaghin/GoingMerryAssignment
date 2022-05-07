import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  icon: string;
  title: string;
  value?: string;
};

const BreweryItem: React.FC<Props> = ({ icon, title, value }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={18} />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  titleText: {
    fontSize: 15,
    marginLeft: 8,
  },
  valueText: {
    fontSize: 15,
    marginLeft: 32,
    textAlign: 'right',
    flex: 1,
  },
});

export default BreweryItem;
