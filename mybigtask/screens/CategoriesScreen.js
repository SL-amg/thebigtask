import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const categories = [
  { 
    id: '1', 
    name: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500',
    description: 'Quick meals, burgers, fries and more'
  },
  { 
    id: '2', 
    name: 'Italian',
    image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=500',
    description: 'Pizza, pasta, and authentic Italian cuisine'
  },
  { 
    id: '3', 
    name: 'Asian',
    image: 'https://images.unsplash.com/photo-1541696490-8744a5dc0228?w=500',
    description: 'Sushi, noodles, and Asian specialties'
  },
  { 
    id: '4', 
    name: 'Mexican',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500',
    description: 'Tacos, burritos, and Mexican favorites'
  },
];

export default function CategoriesScreen({ navigation }) {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('Restaurants', { 
        categoryId: item.id,
        categoryName: item.name 
      })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.categoryImage}
      />
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryText}>{item.name}</Text>
        <Text style={styles.categoryDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>What would you like to eat?</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    color: '#333',
  },
  listContainer: {
    padding: 10,
  },
  categoryItem: {
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
  categoryImage: {
    width: '100%',
    height: 150,
  },
  categoryInfo: {
    padding: 15,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
}); 