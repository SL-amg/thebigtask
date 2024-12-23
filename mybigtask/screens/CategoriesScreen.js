import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const categories = [
  { 
    id: '1', 
    name: 'Fast Food',
    image: 'https://img.icons8.com/color/96/hamburger.png',
  },
  { 
    id: '2', 
    name: 'Italian',
    image: 'https://img.icons8.com/color/96/pizza.png',
  },
  { 
    id: '3', 
    name: 'Asian',
    image: 'https://img.icons8.com/color/96/sushi.png',
  },
  { 
    id: '4', 
    name: 'Mexican',
    image: 'https://img.icons8.com/color/96/taco.png',
  },
  { 
    id: '5', 
    name: 'Desserts',
    image: 'https://img.icons8.com/color/96/cake.png',
  },
  { 
    id: '6', 
    name: 'Drinks',
    image: 'https://img.icons8.com/color/96/cocktail.png',
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
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.categoryImage}
        />
      </View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>What would you like to eat?</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        numColumns={2}
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
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
}); 