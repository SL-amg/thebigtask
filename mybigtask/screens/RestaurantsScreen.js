import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const restaurants = {
  '1': [ // Fast Food
    { id: '1', name: 'Burger King', rating: 4.2, image: 'https://img.icons8.com/color/96/burger-king.png' },
    { id: '2', name: "McDonald's", rating: 4.0, image: 'https://img.icons8.com/color/96/mcdonalds.png' },
    { id: '3', name: 'KFC', rating: 4.1, image: 'https://img.icons8.com/color/96/kfc.png' },
    { id: '4', name: 'Subway', rating: 4.3, image: 'https://img.icons8.com/color/96/subway.png' },
    { id: '5', name: "Wendy's", rating: 4.0, image: 'https://img.icons8.com/color/96/wendys.png' },
    { id: '6', name: "Five Guys", rating: 4.5, image: 'https://img.icons8.com/color/96/hamburger.png' },
  ],
  '2': [ // Italian
    { id: '7', name: 'Pizza Hut', rating: 4.3, image: 'https://img.icons8.com/color/96/pizza-hut.png' },
    { id: '8', name: 'Dominos Pizza', rating: 4.1, image: 'https://img.icons8.com/color/96/dominos-pizza.png' },
    { id: '9', name: 'Pasta Paradise', rating: 4.5, image: 'https://img.icons8.com/color/96/spaghetti.png' },
    { id: '10', name: 'Little Italy', rating: 4.4, image: 'https://img.icons8.com/color/96/pizza.png' },
    { id: '11', name: 'Olive Garden', rating: 4.2, image: 'https://img.icons8.com/color/96/olive.png' },
    { id: '12', name: 'Romano\'s', rating: 4.3, image: 'https://img.icons8.com/color/96/pasta.png' },
  ],
  '3': [ // Asian
    { id: '13', name: 'Panda Express', rating: 4.0, image: 'https://img.icons8.com/color/96/noodles.png' },
    { id: '14', name: 'Sushi Master', rating: 4.6, image: 'https://img.icons8.com/color/96/sushi.png' },
    { id: '15', name: 'Thai Spice', rating: 4.4, image: 'https://img.icons8.com/color/96/thai-food.png' },
    { id: '16', name: 'Korean BBQ', rating: 4.7, image: 'https://img.icons8.com/color/96/korean-food.png' },
    { id: '17', name: 'Wok & Roll', rating: 4.2, image: 'https://img.icons8.com/color/96/wok.png' },
    { id: '18', name: 'Ramen House', rating: 4.5, image: 'https://img.icons8.com/color/96/ramen.png' },
  ],
  '4': [ // Mexican
    { id: '19', name: 'Taco Bell', rating: 4.0, image: 'https://img.icons8.com/color/96/taco-bell.png' },
    { id: '20', name: 'Chipotle', rating: 4.4, image: 'https://img.icons8.com/color/96/burrito.png' },
    { id: '21', name: 'El Pollo Loco', rating: 4.2, image: 'https://img.icons8.com/color/96/taco.png' },
    { id: '22', name: 'Mexican Grill', rating: 4.3, image: 'https://img.icons8.com/color/96/nachos.png' },
    { id: '23', name: 'Qdoba', rating: 4.1, image: 'https://img.icons8.com/color/96/quesadilla.png' },
    { id: '24', name: 'Del Taco', rating: 4.0, image: 'https://img.icons8.com/color/96/mexican-food.png' },
  ],
  '5': [ // Desserts
    { id: '25', name: 'Baskin Robbins', rating: 4.3, image: 'https://img.icons8.com/color/96/ice-cream-cone.png' },
    { id: '26', name: 'Dunkin Donuts', rating: 4.2, image: 'https://img.icons8.com/color/96/dunkin-donuts.png' },
    { id: '27', name: 'Cheesecake Factory', rating: 4.6, image: 'https://img.icons8.com/color/96/cheesecake.png' },
    { id: '28', name: 'Sweet Factory', rating: 4.1, image: 'https://img.icons8.com/color/96/cake.png' },
    { id: '29', name: 'Krispy Kreme', rating: 4.4, image: 'https://img.icons8.com/color/96/doughnut.png' },
    { id: '30', name: 'Cold Stone', rating: 4.5, image: 'https://img.icons8.com/color/96/sundae.png' },
  ],
  '6': [ // Drinks
    { id: '31', name: 'Starbucks', rating: 4.4, image: 'https://img.icons8.com/color/96/starbucks.png' },
    { id: '32', name: 'Jamba Juice', rating: 4.3, image: 'https://img.icons8.com/color/96/smoothie.png' },
    { id: '33', name: 'Bubble Tea House', rating: 4.5, image: 'https://img.icons8.com/color/96/bubble-tea.png' },
    { id: '34', name: 'Coffee Bean', rating: 4.2, image: 'https://img.icons8.com/color/96/coffee.png' },
    { id: '35', name: 'Juice Press', rating: 4.3, image: 'https://img.icons8.com/color/96/juice-bottle.png' },
    { id: '36', name: 'Tropical Smoothie', rating: 4.1, image: 'https://img.icons8.com/color/96/cocktail.png' },
  ],
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
      <View style={styles.restaurantContent}>
        <Image
          source={{ uri: item.image }}
          style={styles.restaurantImage}
        />
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <Image 
              source={{ uri: 'https://img.icons8.com/color/96/star.png' }}
              style={styles.starIcon}
            />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryRestaurants}
        renderItem={renderRestaurant}
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
  restaurantItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  restaurantContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  rating: {
    fontSize: 16,
    color: '#666',
  },
}); 