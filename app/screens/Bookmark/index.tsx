import React from 'react';
import BreweryItem from '../../components/BreweryItem';
import { bookmarks } from '../../store/@slices/bookmark';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import { useTranslation } from 'react-i18next';

const Bookmark: React.FC = () => {
  const { t } = useTranslation();
  const allBookmarks = useSelector(bookmarks);

  return (
    <SafeAreaView style={styles.safeview}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{t('bookmark')}</Text>
        </View>

        {allBookmarks.length !== 0 && (
          <View style={styles.countTextContainer}>
            <Text>{`Total: ${allBookmarks.length}`}</Text>
          </View>
        )}

        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.flatListContentContainer}
          data={allBookmarks}
          renderItem={({ item }) => <BreweryItem item={item} />}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyText}>{t('bookmark_empty')}</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
