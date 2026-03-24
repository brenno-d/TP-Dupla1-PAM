import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../src/styles/CardapioStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
export default function Section({ lista }) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.grid}>
        {lista.map((item, index) => (
          <View key={index} style={styles.sectionItems}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Produtos', {categoria: item.name});
              }}>
              <Image source={item.imagem} style={styles.imagem} />
              <LinearGradient
                style={styles.gradient}
                colors={[
                  'rgba(0,0,0,0)',
                  'rgba(0,0,0,0.3)',
                  'rgba(0,0,0,0.7)',
                  'rgba(0,0,0,0.9)',
                ]}
              />
              <Text style={styles.tituloCard}> {item.name} </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
