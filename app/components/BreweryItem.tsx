import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Brewery, combinedAddress } from '../api/types/breweries';
import { MainStackNavigation } from '../navigation/@types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Colors } from '../assets/colors';
import { toggleBoorkmark } from '../store/@slices/bookmark';

type Props = {
  item: Brewery;
};

const BreweryItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const isBookmarked = useSelector((state: RootState) =>
    state.bookmark.bookmarks.some(i => i.id === item.id),
  );
  const navigation: MainStackNavigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { id: item.id })}>
      <View style={styles.container}>
        <View style={styles.detailContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.typeText}>{item.brewery_type}</Text>
          <Text style={styles.addressText}>{combinedAddress(item)}</Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(toggleBoorkmark(item))}>
          <Icon
            name={'bookmark'}
            size={24}
            color={isBookmarked ? Colors.yellow500 : Colors.gray300}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 10,
    borderColor: Colors.gray200,
    borderWidth: 1,
    padding: 10,
  },
  detailContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  typeText: {
    marginTop: 8,
  },
  addressText: {
    marginTop: 4,
  },
});

export default BreweryItem;
