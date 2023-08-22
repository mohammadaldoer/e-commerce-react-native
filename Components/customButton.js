import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const CustomButton = ({ title,onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.innerContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 105, // Adjust the width as needed
    height: 40,  // Adjust the height as needed
    margin: 2,
  },
  innerContainer: {
    padding: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CustomButton;
