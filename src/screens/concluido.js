import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/ConcluidoStyles';
export default function Concluido({ navigation, route }) {
  const produto = route.params.produto;

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.titulo}>Deseja realizar o pedido?</Text>
      </View>

      <View style={{ alignSelf: 'center', marginTop: 40 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Pedido confirmado', { produto });
          }}>
          <Text style={{ alignSelf: 'center' }}>Confirme aqui.</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>
        Obs: após realizar o pedido, aguarde em torno de 30 minutos para
        recebê-lo
      </Text>
    </View>
  );
}
export function Confirmado() {
  return (
    <View style={[styles.container, {padding: 20}]}>
      <Text style={styles.pedidoConfirmado}>
        Seu pedido já será feio e entregue. Bom apetite e obrigado por comer no Aroy! :D
      </Text>
    </View>
  );
}
