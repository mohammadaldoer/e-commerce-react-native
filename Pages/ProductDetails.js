import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity,TextInput } from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react';

import BottomBar from '../Components/BottomNavBar';

export default function ProductDetails({navigation}) {
  const [productCount,setProductCount]=useState(0);

  const handleNumberChange = (value) => {
    setProductCount(value);
  };

  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
        <Icon name={'chevron-left'} style={{fontSize:55,color:"black",position:"absolute",left:5,top:14,zIndex:1}} onPress={() => navigation.navigate("Products")}/>
      <Image
        source={require('../assets/headPhone.jpg')}
        style={{ width: '100%', height: 300 }}
        resizeMode="contain"></Image>
      <View style={styles.space} />
      <Text style={{ fontWeight: 'bold', paddingHorizontal: 13, fontSize: 18 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <View style={styles.space} />
<View
  style={{
    flexDirection: 'row',
    paddingHorizontal: 13,
    justifyContent: 'space-between',
    alignItems: 'center', 
    height: 30,
    width: '100%',

  }}
>
  <Text
    style={{
      fontWeight: 'bold',
      fontSize: 24,
      height: 30,
    }}
  >
    $45.99
  </Text>
  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
    <Stars
      default={2.5}
      count={5}
      half={true}
      disabled={true}
      starSize={50} // Adjust the star size
      fullStar={<Icon name={'star'} style={{ color: '#fdc208' ,fontSize:18 }} />}
      emptyStar={<Icon name={'star-outline'} style={{fontSize:18 }}/>}
      halfStar={<Icon name={'star-half'} style={{ color: '#fdc208',fontSize:18 }} />}
    />
  </View>
</View>

      <View style={styles.space} />

      <View style={{ width: '90%', height: 1, backgroundColor: '#dee0e2' }} />
      <View style={styles.space} />
      <Text style={{ fontWeight: 'bold', paddingHorizontal: 13, fontSize: 16,alignSelf:"flex-start" }}>
        Colors
      </Text>
      <View   style={{
    flexDirection: 'row',
    paddingHorizontal: 13,
    alignSelf:"flex-start",
    justifyContent: "flex-start",
    alignItems: 'center', 
    height: 30,
    width: '100%',
    marginVertical: 8
  }} >
    <View style={{backgroundColor:'black',width:24,height:24,borderRadius:50 ,marginRight:20}}></View>
    <View style={{backgroundColor:'blue',width:24,height:24,borderRadius:50,marginRight:20}}></View>
    <View style={{backgroundColor:'white',width:24,height:24,borderRadius:50,marginRight:20 ,borderColor:"black",borderWidth:2}}></View>
    <View style={{backgroundColor:'brown',width:24,height:24,borderRadius:50,marginRight:20}}></View>
    <View style={{backgroundColor:'gray',width:24,height:24,borderRadius:50,marginRight:20}}></View>
  </View>

  <View style={styles.space} />

<View style={{ width: '90%', height: 1, backgroundColor: '#dee0e2' }} />
<View style={styles.space} />
<Text style={{ fontWeight: 'bold', paddingHorizontal: 13, fontSize: 16,alignSelf:"flex-start" }}>
        Description
      </Text>

      <Text style={{ paddingHorizontal: 13, fontSize: 14,alignSelf:"flex-start" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente accusamus harum corrupti molestiae vitae. Repellendus sapiente odio nesciunt. Velit ut inventore ad non repellendus dolorem laboriosam voluptas, esse tempora.
      </Text>
      <View style={styles.space} />

      <View   style={{
    flexDirection: 'row',
    paddingHorizontal: 13,
    alignSelf:"flex-start",
    justifyContent: "flex-start",
    alignItems: 'center', 
    width: '100%',
    marginVertical: 8
  }} >

<Text style={{  fontSize: 14,alignSelf:"flex-start" }}>
        Category
      </Text>

      <Text style={{paddingHorizontal: 15,  fontSize: 15,alignSelf:"flex-start" }}>
        :
      </Text>

      <View
      style={{
        flexDirection: 'row',
        width:"70%",
        flexWrap:"wrap",
      }}
      >
      <Text style={{paddingHorizontal: 10,fontSize: 14,fontWeight:"bold"}}>
        #Headphones
      </Text>
      <Text style={{paddingHorizontal: 10,fontSize: 14,fontWeight:"bold"}}>
        #Headphones
      </Text>
      <Text style={{paddingHorizontal: 10,fontSize: 14,fontWeight:"bold"}}>
        #Headphones
      </Text>
      </View>

  </View>
  <View style={styles.space} />

<View style={{ width: '90%', height: 1, backgroundColor: '#dee0e2' }} />
<View style={styles.space} />



<View
style={{
  flexDirection: 'row',
  paddingHorizontal: 13,
  alignSelf:"flex-start",
  justifyContent: "center",
  alignItems: 'center', 
  width: '100%',
}}>
  <NumericInput 
            totalWidth={90} 
            totalHeight={40} 
            value={productCount}
            onChange={handleNumberChange}
            iconSize={5}
            step={1}
            valueType='integer'
            rounded
            type="up-down"
            textColor='black' 
            iconStyle={{ color: 'black' }} 

            />
<TouchableOpacity
style={{marginLeft:3}}
>
  <Text style={{backgroundColor:"black", borderRadius:12, paddingVertical:10,paddingHorizontal:75, color:"white", fontWeight:"bold" ,alignSelf:"center" }}>Add to Cart</Text>
</TouchableOpacity>
</View>
<View style={styles.space} />
    </ScrollView>

    <BottomBar navigation={navigation}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f6f9',
    alignItems: 'center',
  },
  space: {
    height: 16,
  },
});
