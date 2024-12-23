import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const categories = [
  { 
    id: '1', 
    name: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=80',
  },
  { 
    id: '2', 
    name: 'Italian',
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=500&q=80',
  },
  { 
    id: '3', 
    name: 'Asian',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&q=80',
  },
  { 
    id: '4', 
    name: 'Mexican',
    image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=500&q=80',
  },
  { 
    id: '5', 
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80',
  },
  { 
    id: '6', 
    name: 'Drinks',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80',
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
    width: 150,
    height: 150,
    borderRadius: 75,
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
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
}); 