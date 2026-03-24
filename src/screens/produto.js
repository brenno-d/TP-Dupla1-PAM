import { View } from 'react-native';
import styles from '../styles/CardapioStyles';
import { almocos ,sobremesas, doces, salgados, lanches, bebidas } from '../db/comidasdb';
import MostrarProdutos from '../../components/displayCategoria';
export default function Produtos({ route }) {
  const { categoria } = route.params;
  console.log(categoria);
  let lista = [];
  switch (categoria) {
    case 'Almoços':
      lista = almocos;
      break;
    case 'Sobremesas':
      lista = sobremesas;
      break;
    case 'Doces':
      lista = doces;
      break;
    case 'Salgados':
      lista = salgados;
      break;
       case 'Lanches':
      lista = lanches;
      break;
       case 'Bebidas':
      lista = bebidas;
      break;
  }
  return (
    <View style={styles.container}>
      <MostrarProdutos lista={lista} />
    </View>
  );
}
