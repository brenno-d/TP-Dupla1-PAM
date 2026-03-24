import { View, ScrollView, Text, Image } from 'react-native';
import styles from '../src/styles/HomeStyles';
import { LinearGradient } from 'expo-linear-gradient';
export default function Section({ titulo, lista }) {
  return (
    <View>
      <View style={styles.section}>
        <Text style={styles.tituloSection}> {titulo} </Text>
      </View>
      <View style={styles.section}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {lista.map((item, index) => (
            <View key={index} style={styles.sectionItems}>
              <Image source={item.imagem} style={styles.imagem} />
              
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
