import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity  } from 'react-native';
import CheckBox from 'expo-checkbox';
import { register,login } from '../Database';
import useUsers from '../hooks/useUser';

export default function Register({navigation}) {
    const [isChecked, setIsChecked] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [phone ,setPhone]= useState(0);
    const { userInfo, setUserInfo}=useUsers();


    // useEffect(()=>{
    //   if (userInfo) {
    //     navigation.navigate("Home");
    //   }

    // },[userInfo, navigation])

    const handleRegister = () => {
      register(username,password,email,phone)
          .then(()=>{
            login(email,password).then((result) => {
              setUserInfo(result);
            }).then(()=>{
              navigation.navigate("Home");
            })
          })
          .catch((error) => {
            alert("Email already in use")
            console.log('Error:', error);
          });
      };

  const handleRegisterPress = () => {
    if(!username || !password || !phone || !email || !isChecked){
      alert("All fields are required")
    }else{
      handleRegister()

    }

  };

  const handleTermsPress = () => {
    alert("agree")
    console.log("Terms and Conditions clicked");
  };


  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}    
    >Create an Account</Text>
      <Text>Enter Your Details Information</Text>

      <Text style={styles.label}>Username*</Text>
      <TextInput
      onChangeText={(text)=>{setUsername(text)}}
        style={styles.textInput}
        placeholder="Enter your username"
      />

      <Text style={styles.label}>Email Address*</Text>
      <TextInput
            onChangeText={(text)=>{setEmail(text)}}
        style={styles.textInput}
        placeholder="Enter your email"
      />


      <Text style={styles.label}>Password*</Text>
      <TextInput
        onChangeText={(text)=>{setPassword(text)}}
        style={styles.textInput}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <Text style={styles.label}>Mobile Number*</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={(text)=>{
          const numericText = text.replace(/[^0-9]/g, "");
          setPhone(numericText);
        }}
        value={phone}
        style={styles.textInput}
        placeholder="Enter your Mobile Number"
      />



<View style={{flexDirection:"row"}}>
    <CheckBox
    style={{marginTop:11,marginRight:10}}
    disabled={false}
    value={isChecked}
    onValueChange={handleCheck}
  />
    <TouchableOpacity style={styles.marginTopText} onPress={handleTermsPress}>
        <Text style={styles.linkText}>I have accepted the Terms and Conditions</Text>
      </TouchableOpacity>
</View>



      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleRegisterPress}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>


      <TouchableOpacity
      style={{flexDirection:"row",justifyContent:"center",marginTop:12}}
        onPress={()=>{navigation.navigate("Login")}}
      >
        <Text >Have an Account? </Text>
        <Text style={{fontWeight:"bold",textDecorationLine:"underline"}}>LOGIN</Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 10,
    marginBottom: 8,
    borderRadius: 15,
  },
  linkText: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  registerButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  marginTopText: {
    marginTop: 10, // Add margin top to this text
  },
});