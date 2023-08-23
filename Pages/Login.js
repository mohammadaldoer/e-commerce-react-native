import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import useUsers from '../hooks/useUser';
import { login } from '../Database';

const LoginPage = ({navigation}) => {
    const { userInfo, setUserInfo}=useUsers();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleRegister = () => {
        login(email,password).then((result) => {
            setUserInfo(result);
          }).then(()=>{
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              });
          })
            .catch((error) => {
              alert("Email already in use")
              console.log('Error:', error);
            });
        };
  
    const handleRegisterPress = () => {
      if(!password || !email){
        alert("All fields are required")
      }else{
        handleRegister()
  
      }
  
    };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's sign you in</Text>
      <Text style={styles.subtitle}>To continue, you must verify it's you</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text)=>{setEmail(text)}}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text)=>{setPassword(text)}}

      />

      <TouchableOpacity style={styles.loginButton} onPress={handleRegisterPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("Register")}}>
        <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%",
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
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
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    marginTop: 50,
    color: 'black',
  },
  registerLink: {
    marginTop: 50,
    color: '#000',
    textDecorationLine: 'underline',
  },
});

export default LoginPage;