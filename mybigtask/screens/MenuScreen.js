import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const menuItems = {
  '1': [ // Burger King
    { id: '1', name: 'Whopper', price: 5.99, description: 'Signature flame-grilled beef burger' },
    { id: '2', name: 'Chicken Royale', price: 4.99, description: 'Crispy chicken sandwich' },
  ],
  '2': [ // McDonald's
    { id: '3', name: 'Big Mac', price: 4.99, description: 'Classic double-decker burger' },
    { id: '4', name: 'McNuggets', price: 3.99, description: '6 piece chicken nuggets' },
  ],
  // Add more menu items for other restaurants
};

export default function MenuScreen({ route }) {
  const { restaurantId } = route.params;
  const menu = menuItems[restaurantId] || [];

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Add to Order</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menu}
        renderItem={renderMenuItem}
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
  menuItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginTop: 4,
  },
  orderButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
}); 