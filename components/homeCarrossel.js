import { View, ScrollView, Image } from 'react-native';
import styles from '../src/styles/HomeStyles';
export default function Section({ lista }) {
  return (
    <View>
      <View style={styles.sectionCarrossel}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {lista.map((item, index) => (
            <View key={index} style={styles.sectionCarrosselItems}>
              <Image source={item.imagem} style={styles.imagemCarrossel} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
