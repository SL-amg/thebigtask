import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const categories = [
  { id: '1', name: 'Fast Food' },
  { id: '2', name: 'Italian' },
  { id: '3', name: 'Asian' },
  { id: '4', name: 'Mexican' },
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
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
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
  categoryItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryText: {
    fontSize: 18,
  },
}); 