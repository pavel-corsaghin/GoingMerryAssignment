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
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  appNameText: {
    fontSize: 38,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  searchBar: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: Colors.gray200,
    borderRadius: 10,
    alignItems: 'center',
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.black500,
    marginLeft: 8,
  },
  flatList: {
    flex: 1,
    marginTop: 16,
  },
  flatListContentContainer: {
    paddingBottom: 40,
  },
  emptyText: {
    alignSelf: 'center',
    marginTop: 16,
    color: Colors.black300,
  },
});

export default styles;
