import React from 'react';
import { toggleBoorkmark } from '../../store/@slices/bookmark';
import { Alert, SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import InfoItem from './InfoItem';
import { Button, Divider } from 'react-native-paper';
import { MainStackProps } from '../../navigation/@types';
import { getFormattedDate } from '../../utils/dateUtils';
import { Brewery } from '../../api/types/breweries';
import { RootState } from '../../store/';
import useBreweryDetail from './useBreweryDetail';
import { openURL } from 'app/utils/urlUtils';
import { useTranslation } from 'react-i18next';
import { detailCombinedAddress } from '../../utils/breweryUtils';

const Detail: React.FC<MainStackProps<'Detail'>> = ({ route }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isBookmarked = useSelector((state: RootState) =>
    state.bookmark.bookmarks.some(i => i.id === route.params.id),
  );
  const { breweryDetail } = useBreweryDetail(route.params.id);

  const onViewWebsite = () => {
    const websiteURL = breweryDetail?.website_url;
    if (!websiteURL) {
      Alert.alert(t('err_missing_web_url'));
      return;
    }

    openURL(websiteURL);
  };

  const onToggleBookmark = () => {
    if (breweryDetail) {
      const brewery: Brewery = {
        id: breweryDetail.id,
        name: breweryDetail.name,
        brewery_type: breweryDetail.brewery_type,
        street: breweryDetail.street,
        city: breweryDetail.city,
        state: breweryDetail.state,
      };
      dispatch(toggleBoorkmark(brewery));
    }
  };

  return (
    <SafeAreaView style={styles.safeview}>
      <View style={styles.detailContainer}>
        <View style={styles.cardView}>
          <InfoItem icon="beer" title={t('name')} value={breweryDetail?.name} />
          <Divider style={styles.divider} />
          <InfoItem
            icon="group"
            title={t('type')}
            value={breweryDetail?.brewery_type}
          />
          <Divider style={styles.divider} />
          <InfoItem
            icon="home"
            title={t('address')}
            value={detailCombinedAddress(breweryDetail)}
          />
          <Divider style={styles.divider} />
          <InfoItem
            icon="clock"
            title={t('updated_date')}
            value={getFormattedDate(breweryDetail?.updated_at)}
          />
        </View>
      </View>
      <Button
        style={styles.viewWebsiteButton}
        mode="outlined"
        dark
        onPress={onViewWebsite}>
        {t('view_website')}
      </Button>
      <Button
        style={styles.toggleBookmarkButton}
        mode="contained"
        dark
        onPress={onToggleBookmark}>
        {isBookmarked ? t('remove_bookmark') : t('add_bookmark')}
      </Button>
    </SafeAreaView>
  );
};

export default Detail;
