import {
  FlatList,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
} from 'react-native';
import { carrossel } from '../db/carrosseldb';
import { paraVoce, maisVendidos, combos } from '../db/sectiondb';
import SectionCarrossel from '../../components/homeCarrossel';
import Section from '../../components/homeSection';
import styles from '../styles/HomeStyles';
export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View
        style={{
          height: 50,
          backgroundColor: '#FFF28F',
          marginBottom: 10,
        }}></View>
        
      <View style={styles.header}>
        <Image
          source={require('../../assets/icons/logoAroy.png')}
          style={{ height: 70, width: 70, marginLeft: 12 }}
        />
        <Text style={styles.titulo}>Aroy</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TextInput style={styles.search} placeholder="Qual o pedido de Hoje?" />
      </View>
      
      <SectionCarrossel lista={carrossel} />
      <Section titulo="Para você:" lista={paraVoce} />
      <Section titulo="Mais vendidos:" lista={maisVendidos} />
      <Section titulo="Combos:" lista={combos} />
      </ScrollView>
    </View> /*quando colocar style, quando é classe coloca só uma chave, quando é estilização coloca duas e quando mistura os dois tbm style={styles.classe}. style={{stilo1. estilo2}}, style={{[styles.classe, estilo, estilo]}} */
  );
}