import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';

const BottomBar = ({ navigation }) => {
    const route = useRoute();
    const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity onPress={() => navigateTo('Home')}      
      >
      <Icon name={'home'} style={route.name==="Home"? { color: '#324514' ,fontSize:40 }:{ color: 'black' ,fontSize:25 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Cart')}>
      <Icon name={'cart'} style={route.name==="Cart"? { color: '#324514' ,fontSize:40 }:{ color: 'black' ,fontSize:25 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Products')}>
      <Icon name={'cube'} style={route.name==="Products"? { color: '#324514' ,fontSize:40 }:{ color: 'black' ,fontSize:25 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Profile')}>
      <Icon name={'account'} style={route.name==="Profile"? { color: '#324514' ,fontSize:40 }:{ color: 'black' ,fontSize:25 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopStartRadius:18,
    borderTopEndRadius:18,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,
    height: 50,
  },
});

export default BottomBar;
