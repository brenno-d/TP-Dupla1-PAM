import { StyleSheet } from 'react-native';
import { fonts } from './fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
  },

  titulo: {
    fontSize: 32,
    marginBottom: 20,
    fontFamily: fonts.IrishGroover,
    textAlign: 'center',
    color: '#000000',
  },

  item: {
    flexDirection: 'row', 
    marginBottom: 20,
    alignItems: 'flex-start',
  },

  imagem: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  texto: {
    flex: 1,
    marginLeft: 10,
  },

  nome: {
    fontSize: 16,
    fontFamily: fonts.JacquesFrancois,
    marginBottom: 5,
  },

  descricao: {
    fontSize: 14,
    color: '#000000',
  },
});