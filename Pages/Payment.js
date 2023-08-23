import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CheckoutPage = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSave = () => {

    navigation.navigate('Thankyou');
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        onChangeText={text => setFullName(text)}
        value={fullName}
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        onChangeText={text => setAddress(text)}
        value={address}
      />

<Text style={styles.label}>Credit Card Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Credit Card Number"
        onChangeText={text => setAddress(text)}
        value={address}
      />

<Text style={styles.label}>Credit Card Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Credit Card Number"
        onChangeText={text => setAddress(text)}
        value={address}
      />

<Text style={styles.label}>Security code</Text>
      <TextInput
        style={styles.input}
        placeholder="CVC"
        onChangeText={text => setAddress(text)}
        value={address}
      />
      <Text style={styles.label}>Card expiration</Text>
      <TextInput
        style={styles.input}
        placeholder="MM/YY"
        onChangeText={text => setCity(text)}
        value={city}
      />
      <Text style={styles.label}>Zip Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your zip code"
        onChangeText={text => setZipCode(text)}
        value={zipCode}
      />

      <Text style={styles.label}>Choose an option:</Text>
      <TouchableOpacity
        style={[styles.option, selectedOption === 'home' && styles.selectedOption]}
        onPress={() => setSelectedOption('home')}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selectedOption === 'company' && styles.selectedOption]}
        onPress={() => setSelectedOption('company')}
      >
        <Text>Company</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Proceed To Pay</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
  },
  selectedOption: {
    backgroundColor: '#f0f0f0',
  },
  saveButton: {
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 140,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CheckoutPage;