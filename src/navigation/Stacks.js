import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtos from '../screens/produto';
import RootTabs from './Tabs';
import Compra from '../screens/Compra';
import Concluido, { Confirmado } from '../screens/concluido';
import fonts from '../styles/fonts';
const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFF28F',
        },
        headerTitleStyle: {
          fontFamily: 'IrishGroover',
          fontSize: 24,
        },
      }}>
      <Stack.Screen
        name="Main"
        component={RootTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={({ route }) => ({
          title: route.params.categoria,
          animation: 'fade_from_bottom',
        })}
      />
      <Stack.Screen
        name="Compra" component={Compra}
        options={({ route }) => ({
          title: route.params.produto.name
        })} />
      <Stack.Screen
        name="Concluido" component={Concluido}
        options={() => ({
          title: 'Finalizar pedido',
        })} />

      <Stack.Screen
        name="Pedido confirmado"
        component={Confirmado}
        options={() => ({
          title: 'Pedido confirmado',
        })}
      />
    </Stack.Navigator>
  );
}
