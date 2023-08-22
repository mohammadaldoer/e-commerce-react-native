import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Thankyou from './Pages/Thankyou';
import Testingdb from './Pages/testingdb';
import { ProductContextProvider } from './context/productsContext';
import Products from './Pages/Products';
import HomeScreen from './Pages/Home';
import Register from './Pages/Register';


const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <>
    <ProductContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Register" component={Register}  options={{ headerShown: false }}/> 
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/> 
      <Stack.Screen name="Products" component={Products}/> 
      <Stack.Screen name="Product Details" component={ProductDetails}/> 
      <Stack.Screen name="Profile" component={Register}/> 
      <Stack.Screen name="Cart" component={Cart}/> 
      <Stack.Screen name="Payment" component={ProductDetails}  options={{ headerShown: false }}/> 
      <Stack.Screen name="Thankyou" component={Thankyou}  options={{ headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer>
    </ProductContextProvider>
    </>
  );
}


export default App;