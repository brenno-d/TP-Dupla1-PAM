import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/PerfilStyles';
export default function Perfil() {
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
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/icons/iconeUsuario.png')}
          style={styles.imagem}
        />
        <Text style={styles.titulo}>User123</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.texto}>E-mail: </Text>
        <TouchableOpacity style={styles.buttonRow}>
          <Text>medeirosff@gmail.com</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.texto}>Senha: </Text>
        <TouchableOpacity style={styles.buttonRow}>
          <Text>*********</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textoNoButton}>Nome completo:</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Calixto Afonso Medeiras</Text>
      </TouchableOpacity>

      <Text style={styles.textoNoButton}>CPF:</Text>
      <TouchableOpacity style={styles.button}>
        <Text>********645</Text>
      </TouchableOpacity>

      <Text style={styles.textoNoButton}>Endereco:</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Rua das gracas- n 457</Text>
      </TouchableOpacity>

      <Text style={styles.textoNoButton}>Digitos do cartao:</Text>
      <TouchableOpacity style={styles.button}>
        <Text>154</Text>
      </TouchableOpacity>

      <View style={{ alignSelf: 'center', marginTop: 40 }}>
        <TouchableOpacity style={styles.buttonRow}>
          <Text style={{ alignSelf: 'center' }}>REPORTAR ERRO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
