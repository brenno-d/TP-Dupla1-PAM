import { View, ScrollView, Image, Text } from 'react-native';
import styles from '../src/styles/FavoritosStyles';

export default function FavoritosItens({ lista }) {
  return (
    <ScrollView style={styles.container}>
      {lista.map((item, index) => (
        <View key={index} style={styles.item}>
          <Image source={item.imagem} style={styles.imagem} />

          <View style={styles.texto}>
            <Text style={styles.nome}>{item.name}</Text>
            <Text style={styles.descricao}>
              {item.descricao}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}