import { View, Text, ScrollView, Flatlist } from 'react-native';
import { favoritos } from '../db/favoritosdb';
import Favoritositens from '../../components/favoritosItem';
import styles from '../styles/FavoritosStyles';
export default function Favoritos() {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 50,
          backgroundColor: '#FFF28F',
          marginBottom: 10,
        }}></View>
      <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.titulo}>Meus itens salvos:</Text>
        </View>

        <Favoritositens lista={favoritos} />
      </ScrollView>
    </View>
  );
}
