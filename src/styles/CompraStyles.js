import { StyleSheet } from 'react-native';
import { fonts } from './fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  imagem: {
    width: 260,
    height: 260,
    borderRadius: 16,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  nomeepreco: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: fonts.IrishGroover,
  },
  descricao: {
    fontSize: 20,
  },
  containerPedir: {
    flexDirection: 'row',
  alignItems: 'center',
  marginTop: 30,
  },
  botao: {
  borderColor: '#000',
  borderWidth: 2,
  backgroundColor: '#FFF',
  borderRadius: 10,
  paddingVertical: 5,
  paddingHorizontal: 80,
  },
  textoBotao: {
    fontSize: 32,
  fontFamily: fonts.IrishGroover,
  textAlign: 'center',
  }
});
