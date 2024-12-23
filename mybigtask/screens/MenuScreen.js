import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useCart } from '../context/CartContext';

const menuItems = {
  '1': [ // Burger King
    { id: '1', name: 'Whopper', price: 5.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500', description: 'Signature flame-grilled beef burger with fresh lettuce, tomatoes, mayo, pickles, and onions' },
    { id: '2', name: 'Chicken Royale', price: 4.99, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500', description: 'Crispy chicken breast fillet topped with lettuce and mayo' },
    { id: '3', name: 'Bacon King', price: 6.99, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500', description: 'Two flame-grilled beef patties topped with bacon, cheese, and sauce' },
    { id: '4', name: 'Fries', price: 2.99, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500', description: 'Hot, crispy, and golden french fries' },
    { id: '5', name: 'Onion Rings', price: 3.49, image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500', description: 'Crispy breaded onion rings' },
    { id: '6', name: 'Chocolate Shake', price: 3.99, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500', description: 'Rich and creamy chocolate milkshake' },
  ],
  // Add similar items for other restaurants...
};

export default function MenuScreen({ route, navigation }) {
  const { restaurantId } = route.params;
  const menu = menuItems[restaurantId] || [];
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    Alert.alert('Success', `${item.name} added to cart!`);
  };

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image
        source={{ uri: item.image }}
        style={styles.itemImage}
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => handleAddToCart(item)}
          >
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menu}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 10,
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  itemContent: {
    padding: 15,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  addButton: {
    backgroundColor: '#2ecc71',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
}); 