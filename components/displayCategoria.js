import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../src/styles/ProdutosStyles';
import { useNavigation } from '@react-navigation/native';

export default function MostrarProdutos({ lista }) {
  
  const navigation = useNavigation();
  
  return (
    <View>
      <View style={styles.grid}>
        {lista.map((item, index) => (
          <View key={index} style={styles.sectionItems}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Compra', {produto: item});
              }}>
              <Image source={item.imagem} style={styles.imagem} />
              <Text style={styles.tituloCard}> {item.name} - R$ {item.preco.toFixed(2)}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
