import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import MenuScreen from './screens/MenuScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen 
          name="Categories" 
          component={CategoriesScreen}
          options={{ title: 'Food Categories' }}
        />
        <Stack.Screen 
          name="Restaurants" 
          component={RestaurantsScreen}
          options={({ route }) => ({ title: route.params.categoryName })}
        />
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen}
          options={({ route }) => ({ title: route.params.restaurantName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
