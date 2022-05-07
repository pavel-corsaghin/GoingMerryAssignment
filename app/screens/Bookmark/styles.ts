import { Colors } from '../../assets/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: Colors.white400,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'column',
    marginTop: 30,
    marginHorizontal: 24,
  },
  headerText: { fontSize: 38, color: Colors.primary, fontWeight: 'bold' },
  countTextContainer: {
    marginHorizontal: 20,
    alignItems: 'flex-end',
    marginTop: 8,
  },
  flatList: {
    flex: 1,
    marginTop: 8,
  },
  flatListContentContainer: {
    paddingBottom: 40,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 200,
    color: Colors.black300,
  },
});

export default styles;
