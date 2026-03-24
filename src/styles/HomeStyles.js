import { StyleSheet } from 'react-native';
import { fonts } from './fonts';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  search: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    width: '70%',
    borderWidth: 3,
    borderColor: '#FFF28F',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 40,
    fontFamily: fonts.IrishGroover,
  },
  section: {
    marginLeft: 24,
    marginTop: 10,
  },
  tituloSection: {
    fontFamily: fonts.JacquesFrancois,
    fontSize: 20,
    marginBottom: 2,
  },
  sectionItems: {
    width: 120,
    height: 120,
    backgroundColor: '#000000',
    marginBottom: 15,
    marginRight: 10,
    borderRadius: 10,
  },
  sectionCarrossel: {
    marginLeft: 24,
  },
  sectionCarrosselItems: {
    width: 320,
    height: 170,
    backgroundColor: '#000000',
    marginRight: 6,
    marginBottom: 30,
  },
  imagemCarrossel: {
    width: '100%',
    height: '100%',
  },
  imagem: {
    width: 120,
    height: 150,
    marginBottom: 12,
    marginRight: 10,
    borderRadius: 10,
  },
});
