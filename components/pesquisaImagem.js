import { View, ScrollView, Text, Image } from 'react-native';
import styles from '../src/styles/PesquisaStyle';
export default function Section({ titulo, lista }) {
  return (
    <View>
      <View style={styles.grid}>
          {lista.map((item, index) => (
            <View key={index} style={styles.sectionItems}>
              <Image source={item.imagem} style={styles.imagemSection} />
            </View>
          ))}
      </View>
    </View>
  );
}
