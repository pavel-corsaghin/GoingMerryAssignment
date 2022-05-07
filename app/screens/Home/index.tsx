import React from 'react';
import { FlatList, SafeAreaView, TextInput, View, Text } from 'react-native';
import Icon from '../../assets/icons/Icon';
import styles from './styles';
import useBreweriesSearch from './useBreweriesSearch';
import BreweryItem from '../../components/BreweryItem';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { setSearchKeyword, breweries, hasError, loadMoreBreweries } =
    useBreweriesSearch();
  const emptyText = hasError ? t('err_general') : t('err_no_results');

  return (
    <SafeAreaView style={styles.safeview}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>{t('welcome')}</Text>
          <Text style={styles.appNameText}>{t('app_name')}</Text>
        </View>

        <View style={styles.searchBar}>
          <Icon name="search" size={20} />
          <TextInput
            placeholder={t('search_placeholder')}
            style={styles.input}
            onChangeText={setSearchKeyword}
          />
        </View>

        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.flatListContentContainer}
          data={breweries}
          renderItem={({ item }) => <BreweryItem item={item} />}
          keyExtractor={item => item.id}
          onEndReached={loadMoreBreweries}
          ListEmptyComponent={<Text style={styles.emptyText}>{emptyText}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
