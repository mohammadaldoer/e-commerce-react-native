// AnotherComponent.js
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import CustomButton from "../Components/customButton";
import CardContent from "../Components/CardContent"
import useProducts from '../hooks/useProducts';
import BottomBar from "../Components/BottomNavBar";

const Products = ({navigation}) => {
const {allProducts, setAllProducts} = useProducts(); 
const [filteredProducts,setFilteredProducts] = useState(allProducts);

filterProducts = (category)=>{
    let tempList = allProducts.filter((product)=>(product.Category===category));
    console.log(tempList);
    setFilteredProducts(tempList);
}

  return (
    <>
        <View style={{paddingBottom:60}}>
      <View style={styles.container}>
        <CustomButton title="All" onPress={()=>{setFilteredProducts(allProducts); console.log(allProducts)}}/>

        <CustomButton title="Chair" onPress={()=>{filterProducts("Chair")}}/>
        <CustomButton title="Sofa" onPress={()=>{filterProducts("Sofa")}}/>
        <CustomButton title="Dinner" onPress={()=>{filterProducts("Dinner")}}/>
        <CustomButton title="Drawers" onPress={()=>{filterProducts("Drawers")}}/>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <View style={styles.cardContainer} >
            <CardContent title={item.product_name} price={item.Price} id={item.id} category={item.Category} onPress={()=>{navigation.navigate("Product Details",{ id: item.id })}}/>
          </View>
        )}
        numColumns={2} // Set the number of columns to 2
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom:65}} // Add extra padding to the bottom

      />
    </View>
    <BottomBar navigation={navigation}/>

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // To evenly space the buttons
    paddingHorizontal: 10, // Add horizontal padding to the container
    marginVertical: 10, // Add some margin to separate the buttons from the cards
  },
  cardContainer: {
    flex: 1, // Take up equal space in the row
    paddingHorizontal: 5, // Add horizontal padding to each card container
  },
});

export default Products;
