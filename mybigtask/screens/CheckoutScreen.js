import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useCart } from '../context/CartContext';

export default function CheckoutScreen({ navigation }) {
  const { cartItems, totalPrice } = useCart();
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleCheckout = () => {
    // Validate fields
    if (!deliveryInfo.name || !deliveryInfo.phone || !deliveryInfo.address) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // Here you would typically send the order to your backend
    Alert.alert(
      'Order Confirmed',
      'Your order has been placed successfully!',
      [
        {
          text: 'OK',
          onPress: () => {
            // Clear cart and navigate back to home
            navigation.navigate('Home');
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name *"
          value={deliveryInfo.name}
          onChangeText={(text) => setDeliveryInfo({...deliveryInfo, name: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number *"
          keyboardType="phone-pad"
          value={deliveryInfo.phone}
          onChangeText={(text) => setDeliveryInfo({...deliveryInfo, phone: text})}
        />
        <TextInput
          style={[styles.input, styles.addressInput]}
          placeholder="Delivery Address *"
          multiline
          value={deliveryInfo.address}
          onChangeText={(text) => setDeliveryInfo({...deliveryInfo, address: text})}
        />
        <TextInput
          style={[styles.input, styles.addressInput]}
          placeholder="Delivery Notes (Optional)"
          multiline
          value={deliveryInfo.notes}
          onChangeText={(text) => setDeliveryInfo({...deliveryInfo, notes: text})}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        {cartItems.map(item => (
          <View key={item.id} style={styles.orderItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.itemDetails}>
              <Text style={styles.quantity}>x{item.quantity}</Text>
              <Text style={styles.price}>${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
          </View>
        ))}
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Amount:</Text>
          <Text style={styles.totalAmount}>${totalPrice.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  addressInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  itemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 16,
    color: '#666',
    marginRight: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
    minWidth: 80,
    textAlign: 'right',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  checkoutButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 