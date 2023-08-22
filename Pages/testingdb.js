import React, { useEffect } from 'react'
import { Text,Button,FlatList,View } from 'react-native';
import { getProducts,addProduct,Register,getUsers } from '../Database';
import useProducts from '../hooks/useProducts';

const Testingdb = () => {
    const {allProducts, setAllProducts} = useProducts(); 


    const loadProducts = () => {
        getProducts()
          .then((result) => {
            setAllProducts(result);
            console.log(result)
          })
          .catch((error) => {
            console.log('Error loading todos:', error);
          });
      };

      useEffect(() => {
        loadProducts()
    
    },[])

    const handleAddProduct = () => {
        addProduct()
          .then((affectedRows) => {
            console.log(`${affectedRows} row(s) added`);
            loadProducts(); // Refresh the product list
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
            <Text>{item.product_name}</Text>
            <Text>{item.Category}</Text>
          <Text>{item.product_description}</Text>
          <Text>{item.Price}</Text>
        </View>
      );
  return (
<>
<Button title='add' onPress={handleAddProduct}></Button>
     <FlatList
        data={allProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        // keyExtractor={(item,index) => index++}

      />
</>
  )
}

export default Testingdb
