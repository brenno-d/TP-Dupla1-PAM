import { StyleSheet } from 'react-native';
import { fonts } from './fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    marginBottom: 15,
    fontFamily: fonts.IrishGroover,
    fontStyle: 'italic',
    color: '#5C5C5B',
  },
  text: {
    fontSize: 10,
    fontFamily: fonts.JacquesFrancois,
    color: '#5C5C5B',
    textAlign: 'left',
  },
  button: {
    height: 35,
    width: 320,
    padding: 8,
    marginBottom: 5,
    backgroundColor: '#FFF28F',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  pedidoConfirmado: {
    fontSize: 28,
    fontFamily: fonts.JacquesFrancois,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 36,
  },
});
