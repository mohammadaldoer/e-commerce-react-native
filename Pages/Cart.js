import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import BottomBar from '../Components/BottomNavBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 50,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
  },
  productColor: {
    fontSize: 14,
    color: '#666',
  },
  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    borderRadius: 3,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  summaryCard: {
    marginTop: 20,
  },
  summaryText: {
    fontSize: 16,
  },
  total: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  checkoutButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 3,
    marginTop: 10,
  },
  checkoutButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

const ProductCard = ({ name, price, color }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <Text style={styles.productColor}>{color}</Text>
      <View style={styles.quantityBox}>
        <TouchableOpacity style={styles.quantityButton}>
            <Text> -</Text>
           </TouchableOpacity>
        <Text style={styles.quantity}>1</Text>
        <TouchableOpacity style={styles.quantityButton}>
            <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CheckoutSummaryCard = () => {
  return (
    <View style={[styles.card, styles.summaryCard]}>
      <Text style={styles.summaryText}>Sub Total: $100</Text>
      <Text style={styles.summaryText}>Shipping Fee: $100</Text>
      <Text style={styles.summaryText}>Tax: 20%</Text>
      <Text style={[styles.summaryText, styles.total]}>Total: $220</Text>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const Cart = ({navigation}) => {
  const products = [
    { name: 'Product 1', price: '$50', color: 'Red' },
    { name: 'Product 2', price: '$30', color: 'Blue' },
    { name: 'Product 3', price: '$20', color: 'Green' },

  ];

  return (
    <>
    
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard name={item.name} price={item.price} color={item.color} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <CheckoutSummaryCard />


    </View>
    <BottomBar navigation={navigation}/>
</>

  );
};

export default Cart;