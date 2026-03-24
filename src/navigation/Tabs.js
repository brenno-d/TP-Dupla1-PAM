import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Pesquisar from '../screens/Pesquisar';
import Favoritos from '../screens/Favoritos';
import Perfil from '../screens/Perfil';
import Cardapio from '../screens/Cardapio';
import { Image, StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator();

export default function RootTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/home.png')}
              style={{
                width: size,
                height: size,
                tintColor: color, 
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="Pesquisar" component={Pesquisar}
      options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/pesquisar.png')}
              style={{
                width: size,
                height: size,
                tintColor: color, 
              }}
            />
          ),
        }} />
      <Tab.Screen name="Cardápio" component={Cardapio}
      options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/cardapio.png')}
              style={{
                width: size,
                height: size,
                tintColor: color, 
              }}
            />
          ),
        }} />
      <Tab.Screen name="Favoritos" component={Favoritos}
      options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/favoritos.png')}
              style={{
                width: size,
                height: size,
                tintColor: color, 
              }}
            />
          ),
        }} />
      <Tab.Screen name="Perfil" component={Perfil}
      options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/perfil.png')}
              style={{
                width: size,
                height: size,
                tintColor: color, 
              }}
            />
          ),
        }} />
    </Tab.Navigator>
  );
}
