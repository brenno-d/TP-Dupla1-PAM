import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../styles/CompraStyles';

export default function Compra({ route, navigation  }) {
  const produto = route.params.produto;
  return (
    <View style={styles.container}>
      <Text style={styles.nomeepreco}>{produto.name}</Text>
      <Text style={styles.nomeepreco}>R$ {produto.preco.toFixed(2)}</Text>
      <Image source={produto.imagem} style={styles.imagem} />
      <Text style={styles.descricao}> {produto.descricao} </Text>
      <View style={styles.containerPedir}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            navigation.navigate('Concluido', { produto: produto });
          }}>
          <Text style={styles.textoBotao}>PEDIR</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/Star.png')}
            style={{ width: 50, height: 50, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
