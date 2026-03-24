import { View, Text, TextInput, ScrollView } from 'react-native';
import { imagens, imagensSegunda, imagensTerceira } from '../db/imagemdb';
import Section from '../../components/pesquisaImagem';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/PesquisaStyle';
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
    <ScrollView>
      <View
        style={{
          height: 50,
          backgroundColor: '#FFF28F',
          marginBottom: 16,
        }}></View>

      <View style={{ marginBottom: 16, alignItems: 'center', marginTop: 15 }}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Pesquise aqui..."
            placeholderTextColor="#696565"
          />
          <Ionicons name="search" size={20} />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <Text style={styles.titulo}>Nossas outras opções:</Text>

        <Section lista={imagens} />
        <Section lista={imagensSegunda} />
        <Section lista={imagensTerceira} />
      </View>
      </ScrollView>
    </View>
  );
}
