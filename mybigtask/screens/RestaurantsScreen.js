import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const restaurants = {
  '1': [ // Fast Food
    { id: '1', name: 'Burger King', rating: 4.2 },
    { id: '2', name: "McDonald's", rating: 4.0 },
  ],
  '2': [ // Italian
    { id: '3', name: 'Pizza Hut', rating: 4.3 },
    { id: '4', name: 'Pasta Paradise', rating: 4.5 },
  ],
  // Add more restaurants for other categories
};

export default function RestaurantsScreen({ route, navigation }) {
  const { categoryId } = route.params;
  const categoryRestaurants = restaurants[categoryId] || [];

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity
      style={styles.restaurantItem}
      onPress={() => navigation.navigate('Menu', { 
        restaurantId: item.id,
        restaurantName: item.name 
      })}
    >
      <Text style={styles.restaurantName}>{item.name}</Text>
      <Text style={styles.rating}>Rating: {item.rating}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryRestaurants}
        renderItem={renderRestaurant}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  restaurantItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
}); 