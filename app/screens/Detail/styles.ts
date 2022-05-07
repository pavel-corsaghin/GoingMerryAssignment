import { Colors } from '../../assets/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
  },
  detailContainer: {
    flex: 1,
  },
  cardView: {
    backgroundColor: Colors.white400,
    flexDirection: 'column',
    marginHorizontal: 20,
    marginTop: 32,
    borderRadius: 12,
    padding: 8,
  },
  divider: {
    marginHorizontal: 16,
    marginVertical: 8,
    height: 0.5,
  },
  viewWebsiteButton: {
    height: 48,
    marginHorizontal: 24,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleBookmarkButton: {
    height: 48,
    marginHorizontal: 24,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
