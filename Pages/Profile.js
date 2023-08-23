import React, {useState } from 'react'
import { Text,Button,View,TouchableOpacity,StyleSheet } from 'react-native';
import { getProducts,addProduct,register,getUsers,login,deleteUsers } from '../Database';
import useUsers from '../hooks/useUser';
import BottomBar from '../Components/BottomNavBar';

const Profile = ({navigation}) => {
    const [allUsers, setAllUsers] = useState([]);
    const { userInfo, setUserInfo}=useUsers();




  handleLogout=async()=>{
    await setUserInfo(null); 
    navigation.reset({
      index: 0,
      routes: [{ name: 'Register' }],
    });

  }




  return (
    <>
    <View style={styles.container}>

<Text style={styles.title}> {userInfo?.username}</Text>
<Text style={styles.title}> {userInfo?.email}</Text>

<TouchableOpacity style={styles.loginButton}
onPress={handleLogout}
>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
</View>
    
    
    <BottomBar navigation={navigation}/>

    </>

  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingVertical:"20%"

    },
    loginButton: {
      backgroundColor: 'black',
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    title:{
        textAlign:"center",
        marginVertical:25,
        fontSize:35
    }
  });

export default Profile
