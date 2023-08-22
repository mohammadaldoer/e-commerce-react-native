import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import { useEffect, useState } from 'react';
import { initDB,getProducts,addProduct } from './Database';
import { Text,Button,FlatList,View } from 'react-native';



const Stack = createNativeStackNavigator();

function App() {
  const [allProducts,setAllProducts] = useState([]);
  const loadProducts = () => {
    getProducts()
      .then((result) => {
        setAllProducts(result);
        console.log(result)
      })
      .catch((error) => {
        console.log('Error loading todos:', error);
      });
  };


const handleAddProduct = () => {
  addProduct()
    .then((affectedRows) => {
      console.log(`${affectedRows} row(s) added`);
      loadProducts(); // Refresh the product list
    })
    .catch((error) => {
      console.log('Error adding product:', error);
    });
};

const renderProduct = ({ item }) => (
  <View>
      <Text>
        {item.id}
      </Text>
      <Text>{item.product_name}</Text>
    <Text>{item.product_description}</Text>
    <Text>{item.Price}</Text>
  </View>
);

  useEffect(()=>{
    initDB()
    .then(()=>{
      console.log("success")})
    .catch((err)=>{
      console.log(err)
    })

  },[]);
  return (
    <>
    {/* <Button title='add' onPress={handleAddProduct}></Button>
     <FlatList
        data={allProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
      /> */}
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Register" component={ProductDetails}  options={{ headerShown: false }}/> 
      <Stack.Screen name="Home" component={ProductDetails}/> 
      <Stack.Screen name="Products" component={ProductDetails}/> 
      <Stack.Screen name="Product Details" component={ProductDetails}/> 
      <Stack.Screen name="Profile" component={ProductDetails}/> 
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }}/> 
      <Stack.Screen name="Payment" component={ProductDetails}  options={{ headerShown: false }}/> 
      <Stack.Screen name="Thankyou" component={ProductDetails}  options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={ProductDetails}  options={{ headerShown: false }}/> 

      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


export default App;