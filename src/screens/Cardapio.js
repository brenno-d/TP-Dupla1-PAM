import { View, Text } from 'react-native';
import { comidasCardapio } from '../db/cardapiodb';
import Section from '../../components/cardapioOpcoes';
import styles from '../styles/CardapioStyles';
export default function Cardapio() {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 50,
          backgroundColor: '#FFF28F',
          marginBottom: 10,
        }}></View>

      <View
        style={{
          marginTop: 65,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.titulo}> CARDÁPIO </Text>
      </View>
        <Section lista={comidasCardapio} />
    </View>
  );
}
