import { StyleSheet } from 'react-native';
import { fonts } from './fonts';
export default StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  },
   row: {
    flexDirection: 'row', // Alinha os itens em linha
    alignItems: 'center', // Alinha verticalmente ao centro
    marginBottom: 5,
    marginLeft: 20,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 15,
    fontFamily: fonts.IrishGroover,
    fontStyle: 'italic',
    color: '#5C5C5B',
  },
  textoNoButton: {
    width: 150,
    fontFamily: fonts.JacquesFrancois,
    marginLeft: 20,
  },
  imagem: {
    height: 150,
    width: 150,
  },
  button: {
    height: 35,
    width: 370,
    padding: 8,
    marginBottom: 5,
    marginLeft: 18,
    backgroundColor: '#FFF28F',
    alignSelf: 'left',
    justifyContent: 'center',
  },
   buttonRow: {
    height: 35,
    width: 320,
    padding: 8,
    marginBottom: 5,
    backgroundColor: '#FFF28F',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
