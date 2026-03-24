import { StyleSheet } from 'react-native';
import { fonts } from './fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionItems: {
    width: '47%',
    height: 180,
    marginBottom: 20,
    position: 'relative',
  },
  imagem: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 35,
    fontFamily: fonts.IrishGroover,
    marginBottom: 15,
    textAlign: 'center',
    color: '#5C5C5B',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    borderRadius: 10,
  },
  tituloCard: {
    fontFamily: fonts.JacquesFrancois,
    fontSize: 20,
    position: 'absolute',
    bottom: 6,
    left: 7, 
    color: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
});
