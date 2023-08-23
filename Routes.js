import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Thankyou from './Pages/Thankyou';
import Testingdb from './Pages/testingdb';
import Products from './Pages/Products';
import HomeScreen from './Pages/Home';
import Register from './Pages/Register';
import useUsers from './hooks/useUser';
import LoginPage from './Pages/Login';
import Profile from './Pages/Profile';
import CheckoutPage from './Pages/Payment';


const Stack = createNativeStackNavigator();

const Routes = () => {
    const { userInfo, setUserInfo}=useUsers();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {userInfo ? (
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            ) : (
              <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            )}
        <Stack.Screen name="Login" component={LoginPage}/> 
      <Stack.Screen name="Products" component={Products}/> 
      <Stack.Screen name="Product Details" component={ProductDetails}/> 
      <Stack.Screen name="Profile" component={Profile}/> 
      <Stack.Screen name="Cart" component={Cart}/> 
      <Stack.Screen name="Payment" component={CheckoutPage}  options={{ headerShown: false }}/> 
      <Stack.Screen name="Thankyou" component={Thankyou}  options={{ headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
