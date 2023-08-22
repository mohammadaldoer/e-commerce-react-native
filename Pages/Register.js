import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity  } from 'react-native';
import CheckBox from 'expo-checkbox';

export default function Register({navigation}) {
    const [isChecked, setIsChecked] = useState(false);

  const handleRegisterPress = () => {
    // Your registration logic here
    navigation.navigate("Home");
    console.log("Registration button pressed");
  };

  const handleTermsPress = () => {
    // Handle the terms and conditions click
    console.log("Terms and Conditions clicked");
  };


  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create an Account</Text>
      <Text>Enter Your Details Information</Text>

      <Text style={styles.label}>Email Address*</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email"
      />

      <Text style={styles.label}>Password*</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <Text style={styles.label}>Mobile Number*</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Mobile Number"
      />

      <Text style={styles.label}>Address*</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Address"
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