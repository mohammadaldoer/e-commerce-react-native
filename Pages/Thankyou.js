import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

const Thankyou = ({navigation}) => {
    return (
       <View>
        <Text style={{fontSize:35, fontWeight:50 ,fontWeight:"bold",textAlign:"center", marginTop:"50%"
}}>Thank You!</Text>

<TouchableOpacity style={{backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 140}}
    onPress={()=>{navigation.navigate("Home")}}
    >
        <Text style={{  color: 'white',
    fontWeight: 'bold'}}>back</Text>
      </TouchableOpacity>
       </View>
    );
}

export default Thankyou;

