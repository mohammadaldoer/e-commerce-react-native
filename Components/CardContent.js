import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const CardContent = ({ title, price, id,category ,onPress}) => {
const images = [
  require("../assets/aesthetic-chair.png"),
  require("../assets/chair.jpg"),
  require("../assets/istockphoto.jpg"),
  require("../assets/comdina.jpg"),
  require("../assets/sofa.jpg"),
  require("../assets/table.png"),
  require("../assets/sofa2.jpg"),
  require("../assets/krsi.jpg"),
  require("../assets/images.jpg"),
  require("../assets/stock.jpg")

];
  return (
    <View style={styles.container} >
      <Card onPress={onPress}>


        <Card.Cover source={images[id-1]} />

        <Card.Content>
          <Text variant="titleLarge" style={styles.cardText}>
            {title}
          </Text>
          <Text variant="titleLarge" style={styles.cardText}>
            {category}
          </Text>
          <Text variant="bodyMedium" style={styles.cardPrice}>
            ${price}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    
  },
  cardText: {
    fontSize: 18,
  },
  cardPrice: {
    marginLeft: 5,
  },
});

export default CardContent;