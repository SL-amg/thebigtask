import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Background from '../components/Background';

const restaurants = {
  '1': [ // Fast Food
    { id: '1', name: 'Burger King', rating: 4.2, image: 'https://logo.clearbit.com/burgerking.com' },
    { id: '2', name: "McDonald's", rating: 4.0, image: 'https://logo.clearbit.com/mcdonalds.com' },
    { id: '3', name: 'KFC', rating: 4.1, image: 'https://logo.clearbit.com/kfc.com' },
    { id: '4', name: 'Subway', rating: 4.3, image: 'https://logo.clearbit.com/subway.com' },
    { id: '5', name: "Wendy's", rating: 4.0, image: 'https://logo.clearbit.com/wendys.com' },
    { id: '6', name: "Five Guys", rating: 4.5, image: 'https://logo.clearbit.com/fiveguys.com' },
  ],
  '2': [ // Italian
    { id: '7', name: 'Pizza Hut', rating: 4.3, image: 'https://logo.clearbit.com/pizzahut.com' },
    { id: '8', name: 'Dominos Pizza', rating: 4.1, image: 'https://logo.clearbit.com/dominos.com' },
    { id: '9', name: 'Olive Garden', rating: 4.5, image: 'https://logo.clearbit.com/olivegarden.com' },
    { id: '10', name: 'Little Caesars', rating: 4.4, image: 'https://logo.clearbit.com/littlecaesars.com' },
    { id: '11', name: 'Papa Johns', rating: 4.2, image: 'https://logo.clearbit.com/papajohns.com' },
    { id: '12', name: 'Carrabba\'s', rating: 4.3, image: 'https://logo.clearbit.com/carrabbas.com' },
  ],
  '3': [ // Asian
    { id: '13', name: 'Panda Express', rating: 4.0, image: 'https://logo.clearbit.com/pandaexpress.com' },
    { id: '14', name: 'P.F. Chang\'s', rating: 4.6, image: 'https://logo.clearbit.com/pfchangs.com' },
    { id: '15', name: 'Benihana', rating: 4.4, image: 'https://logo.clearbit.com/benihana.com' },
    { id: '16', name: 'Wagamama', rating: 4.7, image: 'https://logo.clearbit.com/wagamama.com' },
    { id: '17', name: 'Jollibee', rating: 4.2, image: 'https://logo.clearbit.com/jollibee.com' },
    { id: '18', name: 'Yoshinoya', rating: 4.5, image: 'https://logo.clearbit.com/yoshinoya.com' },
  ],
  '4': [ // Mexican
    { id: '19', name: 'Taco Bell', rating: 4.0, image: 'https://logo.clearbit.com/tacobell.com' },
    { id: '20', name: 'Chipotle', rating: 4.4, image: 'https://logo.clearbit.com/chipotle.com' },
    { id: '21', name: 'El Pollo Loco', rating: 4.2, image: 'https://logo.clearbit.com/elpolloloco.com' },
    { id: '22', name: 'Qdoba', rating: 4.3, image: 'https://logo.clearbit.com/qdoba.com' },
    { id: '23', name: 'Moe\'s', rating: 4.1, image: 'https://logo.clearbit.com/moes.com' },
    { id: '24', name: 'Del Taco', rating: 4.0, image: 'https://logo.clearbit.com/deltaco.com' },
  ],
  '5': [ // Desserts
    { id: '25', name: 'Baskin Robbins', rating: 4.3, image: 'https://logo.clearbit.com/baskinrobbins.com' },
    { id: '26', name: 'Dunkin Donuts', rating: 4.2, image: 'https://logo.clearbit.com/dunkindonuts.com' },
    { id: '27', name: 'Cheesecake Factory', rating: 4.6, image: 'https://logo.clearbit.com/thecheesecakefactory.com' },
    { id: '28', name: 'Dairy Queen', rating: 4.1, image: 'https://logo.clearbit.com/dairyqueen.com' },
    { id: '29', name: 'Krispy Kreme', rating: 4.4, image: 'https://logo.clearbit.com/krispykreme.com' },
    { id: '30', name: 'Cold Stone', rating: 4.5, image: 'https://logo.clearbit.com/coldstonecreamery.com' },
  ],
  '6': [ // Drinks
    { id: '31', name: 'Starbucks', rating: 4.4, image: 'https://logo.clearbit.com/starbucks.com' },
    { id: '32', name: 'Jamba Juice', rating: 4.3, image: 'https://logo.clearbit.com/jamba.com' },
    { id: '33', name: 'Dutch Bros', rating: 4.5, image: 'https://logo.clearbit.com/dutchbros.com' },
    { id: '34', name: 'Coffee Bean', rating: 4.2, image: 'https://logo.clearbit.com/coffeebean.com' },
    { id: '35', name: 'Peet\'s Coffee', rating: 4.3, image: 'https://logo.clearbit.com/peets.com' },
    { id: '36', name: 'Caribou Coffee', rating: 4.1, image: 'https://logo.clearbit.com/cariboucoffee.com' },
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
    <Background>
      <View style={styles.content}>
        <FlatList
          data={categoryRestaurants}
          renderItem={renderRestaurant}
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