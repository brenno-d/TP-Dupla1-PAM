import { StyleSheet } from 'react-native';
import fonts from './fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  sectionItems: {
    width: '32%',
  },
  imagemSection: {
    width: '100%',
    height: 180,
  },
  search: {
    borderRadius: 30,
    padding: 5,
    width: '90%',
    borderWidth: 3,
    borderColor: '#FFF28F',
    marginBottom: 65,
    flexDirection: 'row',
  },
  searchContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF28F',
    borderRadius: 30,
    padding: 10,
    marginTop: 15,
    width: 340,
    borderWidth: 3,
    borderColor: '#FFF28F',
    height: 45,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#1F1F1F',
    fontSize: 16,
    height: '100%',
    paddingVertical: 0,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 15,
    fontStyle: 'italic',
    color: '#5C5C5B',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
});
