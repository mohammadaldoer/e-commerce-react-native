import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './Pages/ProductDetails';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={ProductDetails}/> 
      <Stack.Screen name="Products" component={ProductDetails}/> 
      <Stack.Screen name="Product Details" component={ProductDetails}/> 
      <Stack.Screen name="Profile" component={ProductDetails}/> 
      <Stack.Screen name="Cart" component={ProductDetails} options={{ headerShown: false }}/> 
      <Stack.Screen name="Payment" component={ProductDetails}  options={{ headerShown: false }}/> 
      <Stack.Screen name="Thankyou" component={ProductDetails}  options={{ headerShown: false }}/> 
      <Stack.Screen name="Login" component={ProductDetails}  options={{ headerShown: false }}/> 
      <Stack.Screen name="Register" component={ProductDetails}  options={{ headerShown: false }}/> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;