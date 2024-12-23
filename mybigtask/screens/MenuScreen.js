import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useCart } from '../context/CartContext';
import Background from '../components/Background';

const menuItems = {
  '1': [ // Burger King
    { id: '1', name: 'Whopper', price: 5.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500', description: 'Signature flame-grilled beef burger with fresh lettuce, tomatoes, mayo, pickles, and onions' },
    { id: '2', name: 'Chicken Royale', price: 4.99, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500', description: 'Crispy chicken breast fillet topped with lettuce and mayo' },
    { id: '3', name: 'Bacon King', price: 6.99, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500', description: 'Two flame-grilled beef patties topped with bacon, cheese, and sauce' },
    { id: '4', name: 'Fries', price: 2.99, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500', description: 'Hot, crispy, and golden french fries' },
    { id: '5', name: 'Onion Rings', price: 3.49, image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500', description: 'Crispy breaded onion rings' },
    { id: '6', name: 'Chocolate Shake', price: 3.99, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500', description: 'Rich and creamy chocolate milkshake' },
    { id: '7', name: 'Veggie Burger', price: 4.99, image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500', description: 'Plant-based patty with fresh vegetables' },
    { id: '8', name: 'Fish Sandwich', price: 4.49, image: 'https://images.unsplash.com/photo-1614777986387-015c2a89b696?w=500', description: 'Crispy fish fillet with tartar sauce' },
    { id: '9', name: 'Chicken Wings', price: 5.99, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500', description: 'Spicy buffalo wings with ranch dip' },
    { id: '10', name: 'Garden Salad', price: 4.49, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500', description: 'Fresh mixed greens with choice of dressing' },
  ],
  '2': [ // McDonald's
    { id: '11', name: 'Big Mac', price: 5.49, image: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?w=500', description: 'Iconic double-decker burger with special sauce' },
    { id: '12', name: 'Quarter Pounder', price: 4.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500', description: 'Quarter pound beef patty with cheese' },
    { id: '13', name: 'McNuggets', price: 4.99, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500', description: '10 piece chicken nuggets' },
    { id: '14', name: 'McFlurry', price: 3.49, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500', description: 'Soft serve with your choice of toppings' },
    { id: '15', name: 'French Fries', price: 2.49, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500', description: 'World famous golden fries' },
    { id: '16', name: 'Apple Pie', price: 1.99, image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=500', description: 'Warm apple pie with crispy crust' },
    { id: '17', name: 'McChicken', price: 3.99, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500', description: 'Classic chicken sandwich with lettuce' },
    { id: '18', name: 'Sausage McMuffin', price: 3.49, image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=500', description: 'Breakfast sandwich with egg and cheese' },
    { id: '19', name: 'Happy Meal', price: 5.99, image: 'https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=500', description: 'Kids meal with toy included' },
    { id: '20', name: 'Chicken Salad', price: 5.49, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500', description: 'Grilled chicken over fresh greens' },
  ],
  '3': [ // KFC
    { id: '21', name: 'Original Recipe', price: 6.99, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500', description: '3 pieces of original recipe chicken' },
    { id: '22', name: 'Zinger Burger', price: 5.49, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500', description: 'Spicy chicken fillet burger' },
    { id: '23', name: 'Popcorn Chicken', price: 4.99, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500', description: 'Bite-sized chicken pieces' },
    { id: '24', name: 'Coleslaw', price: 2.49, image: 'https://images.unsplash.com/photo-1621347311831-5636763b11fd?w=500', description: 'Classic creamy coleslaw' },
    { id: '25', name: 'Mashed Potatoes', price: 2.99, image: 'https://images.unsplash.com/photo-1618879961652-36f5b87c6b42?w=500', description: 'Creamy mashed potatoes with gravy' },
    { id: '26', name: 'Corn on the Cob', price: 2.49, image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500', description: 'Sweet corn with butter' },
    { id: '27', name: 'Hot Wings', price: 5.99, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500', description: 'Spicy chicken wings' },
    { id: '28', name: 'Famous Bowl', price: 5.49, image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500', description: 'Loaded bowl with chicken and sides' },
    { id: '29', name: 'Chicken Tenders', price: 5.49, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500', description: 'Premium chicken tenders' },
    { id: '30', name: 'Biscuits', price: 1.99, image: 'https://images.unsplash.com/photo-1585535853521-75f584315fbe?w=500', description: 'Warm, flaky biscuits' },
  ],
  // Continue with similar pattern for other restaurants...
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
    <Background>
      <View style={styles.content}>
        <FlatList
          data={menu}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  listContainer: {
    padding: 10,
  },
  menuItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
    color: '#1a237e',
  },
  addButton: {
    backgroundColor: '#1a237e',
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