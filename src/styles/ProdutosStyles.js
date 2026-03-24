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
    marginBottom: 14,
    position: 'relative',
  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 2,
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
  fontSize: 14,
  marginTop: 5,
  color: '#000', 
  textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  preco: {
    fontFamily: fonts.JacquesFrancois,
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  }
});
