import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image ,ScrollView ,TouchableOpacity} from 'react-native';
import json from '../Components/data.json'
import BottomBar from '../Components/BottomNavBar';
import useUsers from '../hooks/useUser';

// Create a screen component
function Categories_contain (){
  const array = json.img_Categories.map((e, i) => {
    return (
      <View style={styles.contain_Categories} key={i}>
        <View >

        <Image source={{ uri: e.url }} style={styles.img_Categories} />
        </View>
        <Text>{e.description}</Text>
      </View>
    );
  });

  return array;
}
  
function Trendings_contain (){
  const array = json.img_Trendings.map((e, i) => {
    return (
      <View>

      <View style={styles.contain_Trendings} key={i}>
      <Image source={{ uri: e.url }} style={styles.img_Trendings} />
      <View>
        <Text>{e.description}</Text>
    <View style={styles.price}>
    <Text>{e.price}</Text>
      <View  style={styles.price_button}>
          <Button title="Shop"  color="black"/>
        </View>  
    </View>
      </View>
        </View>

      </View>
    );
  });

  return array;
}
  


// Define a custom header component
function Header() {
    return (
      <View style={styles.headerContainer}>
        <Text>Discover</Text>
        <TextInput placeholder='Search' style={styles.search} />
        <Image
          source={{ uri:json.img.cart_img.url}}
          style={styles.img.cart_img}
        />
      </View>
    );
  }

function HomeScreen({ navigation }) {
  const [userData,setUserData]=useState("");
  const { userInfo, setUserInfo}=useUsers();



  return (
<>
<Header/>
<ScrollView contentContainerStyle={{paddingBottom:55}}>

    <View style={styles.container}>
      <View style={styles.part_top} > 
    <Image 
    source={{uri:json.img.main_img.url}}
    style={styles.img.main_img}
    />
    <View style={styles.text_img}>
      <View style={styles.text_left}>
      <Text>Budget Furnitures</Text>
      <Text>All Furnitures Discount</Text>
      </View>
      <View style={styles.text_right}>

      <Text>Upto 50% Off*</Text>
     <View style={styles.Button}>
     <Button title="Shop Nowe"  color="black"/>
     </View>
      </View>

    </View>
    </View>
    

  <View style={styles.Categories}>
    <View style={styles.in_top}>
      <Text>Categories</Text>
      <Text>VIEW ALL</Text>
 </View>
    <View style={styles.all_contain_Categories}>
{Categories_contain()}
 </View>
  </View>
  <View style={styles.Trendings}> 
    <View style={styles.in_top}>
      <Text>Trendings</Text>
      <Text>VIEW ALL</Text>
 </View>
    <View style={styles.all_Trendings}>
{Trendings_contain()}
 </View>
 </View>
    </View>
    <View style={styles.part_down} > 
    <Image 
    source={{uri:json.img.last_img.url}}
    style={styles.img.main_img}
    />
    <View style={styles.text_last_img}>
   <Text style={[styles.text,{margin:10}]}>New Arrivals {'\n'}
 Winter</Text>
    
      <Text style={[styles.text, {  fontSize: 20},{margin:10}]}>Upto 30% Off*</Text>
     <View style={styles.Button}>
     <TouchableOpacity style={[styles.button,{marginLeft:20}]} onPress={()=>{navigation.navigate("Products")}}>
      <Text  style={[ {  fontSize: 20}]}>Shop</Text>
    </TouchableOpacity>
      </View>
    </View>
    </View>
</ScrollView>
<BottomBar navigation={navigation}/>

</>

  );
}





// const Stack = createStackNavigator();

// Create the main App component
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           header: () => <Header />, // Use the custom header component
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//         />
       
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };


const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
   
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-around",
    marginTop:30,
    height:40
  },
  part_top:{
    
  minHeight:200
  
},
  part_down:{
  minHeight:200,
  marginLeft:20
},
img:{
  cart_img: {
    width: 30, 
    height: 30, 
  },
  main_img:{
    width: 320, 
    height: 200, 
    borderRadius:20,
  }},
  text_img:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    gap:50,
    marginTop:-180
    
  },
  text_last_img:{
    flex:1,
    gap:5,
    marginTop:-180,
  
    
  },
  text_left:{
    flex:0,
    gap:7
  },
  text_right:{
    flex:0,
    gap:7
  },
  search:{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width:170,
    paddingLeft:10
  }
  ,Button:{
    width:100,
    
  },
  Categories:{
    flex:0,
    minHeight:150,
  },
  in_top:{
    marginTop:10,
    flex:0,
    flexDirection:"row",
    justifyContent:"space-around",
    width:460,
    minHeight:40,
  },
  img_Categories:{
    flex:0,
    width:50,
    height:40,
    borderRadius:50,
  
  }
  ,all_contain_Categories:{
    flex:0,
    flexDirection:"row",
    gap:10,
    justifyContent:"center"
  },
  contain_Categories:{
    flex:0,
    width:74,
    backgroundColor:"#ffffff",
    alignItems:"center",
    borderRadius:30,
    height:90,
    padding:10
  },
  all_Trendings:{
// alignItems:"center",
marginLeft:60
  },
  img_Trendings:{
    borderRadius:30,
    width:120,
    height:120,
  },
  contain_Trendings:{
    flex:0,
    flexDirection:"row",
  gap:30,
    margin:10,

  },
  price:{
    flex:0,
    flexDirection:"row",
    justifyContent:"space-around",
    gap:70,
    marginTop:30
  },
  text: {
    color: 'lightgray', // Set the text color here
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    color: 'black', // Text color
    backgroundColor: 'white', // Background color
    fontWeight: 'bold',
  alignItems:"center"
  },
});


export default HomeScreen;
