import React, { useEffect,useState } from 'react'
import { Text,Button,FlatList,View } from 'react-native';
import { getProducts,addProduct,register,getUsers,login,deleteUsers } from '../Database';
import useProducts from '../hooks/useProducts';
import useUsers from '../hooks/useUser';

const Testingdb = ({navigation}) => {
    const [allUsers, setAllUsers] = useState([]);
    const [error,setError]=useState(null);
    const { userInfo, setUserInfo}=useUsers();

    const loadUsers = () => {
      getUsers()
          .then((result) => {
            setAllUsers(result);
            console.log(result)
          })
          .catch((error) => {
            console.log('Error loading todos:', error);
          });
      };

      useEffect(() => {
        loadUsers()
    
    },[])

    useEffect(() => {
      if(error){
        alert(error);
      }
  },[error])


  handleLogout=async()=>{
    await setUserInfo(null); 
    navigation.reset({
      index: 0,
      routes: [{ name: 'Register' }],
    });

  }

    const handleRegister = () => {
      register("test","123","test",123)
          .then((affectedRows) => {
            loadUsers(); // Refresh the product list
          })
          .catch((error) => {
            setError(error);

            console.log('Error adding product:', error);
          });
      };

      const handleLogin = () => {
        // login("test","123")
        deleteUsers()
            .then((result) => {
              alert(result.id);
              console.log("test")
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
            <Text>{item.username}</Text>
            <Text>{item.email}</Text>
          <Text>{item.password}</Text>
          <Text>{item.phone}</Text>
        </View>
      );
  return (
<>
<Button title='register' onPress={handleRegister}></Button>
<Button title='login' onPress={handleLogin}></Button>
<Button title='logout' onPress={handleLogout}></Button>

     <FlatList
        data={allUsers}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        // keyExtractor={(item,index) => index++}

      />
</>
  )
}

export default Testingdb
