import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import BottomBar from '../Components/BottomNavBar';
import { getOrders,deleteOrder } from '../Database';
import useUsers from '../hooks/useUser';






const ProductCard = ({ id,name, price, color,amount,onPress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.productName}>product: {name}</Text>
      <Text style={styles.productPrice}>price: {price}</Text>
      <Text style={styles.productColor}>color: {color}</Text>
      <Text style={styles.quantity}>amount: {amount}</Text>

      <View style={styles.quantityBox}>
        <TouchableOpacity style={styles.quantityButton}
        onPress={onPress}
        >
            <Text key={id}>Remove from cart</Text>
           </TouchableOpacity>
      </View>
    </View>
  );
};

const CheckoutSummaryCard = ({totalPrice,navigation}) => {
  return (
    <View style={[styles.card, styles.summaryCard]}>
      <Text style={styles.summaryText}>Sub Total: ${totalPrice}</Text>
      <Text style={styles.summaryText}>Shipping Fee: $100</Text>
      <Text style={styles.summaryText}>Tax: 20%</Text>
      <Text style={[styles.summaryText, styles.total]}>Total: ${totalPrice+200+totalPrice*0.2}</Text>
      <TouchableOpacity style={styles.checkoutButton}
      onPress={()=>{
        navigation.navigate("Payment");
      }}
      >
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const Cart = ({navigation}) => {
  const [cartProducts,setCartProducts]=useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, setUserInfo}=useUsers();
  const [totalPrice,setTotalPrice] = useState(0);
  const deleteProduct = async(id)=>{
    deleteOrder(id).then(()=>{
      getOrders(userInfo.id)
      .then((result)=>{
        setCartProducts(result);
      }).then(()=>{
        const result= cartProducts.reduce((result,item)=>result+item.Price*item.Amount,0);
        setTotalPrice(result);
      })
    })
  }


  useEffect(()=>{
    getOrders(userInfo.id)
    .then((result)=>{
      setCartProducts(result);
    }).then(()=>{
      setLoading(false);
      const result= cartProducts.reduce((result,item)=>result+item.Price*item.Amount,0);
      setTotalPrice(result);
    }).catch((error)=>{
      console.log(error);
      alert("failed to retrieve products");
    })

  },[cartProducts]);

  // const products = [
  //   { name: 'Product 1', price: '$50', color: 'Red' },
  //   { name: 'Product 2', price: '$30', color: 'Blue' },
  //   { name: 'Product 3', price: '$20', color: 'Green' },

  // ];

  return (
    <>
    {loading? <Text>loading</Text>:
        <View style={styles.container}>
        <FlatList
          data={cartProducts}
          renderItem={({ item }) => <ProductCard id={item.product_id} name={item.product_name} price={item.Price} color={item.Color} amount={item.Amount} onPress={()=>{deleteProduct(item.id)}}/>}
          keyExtractor={(item, index) => index.toString()}
        />
        <CheckoutSummaryCard totalPrice={totalPrice} navigation={navigation}/>
  
  
      </View>
    
    }

    <BottomBar navigation={navigation}/>
</>

  );
};
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
export default Cart;