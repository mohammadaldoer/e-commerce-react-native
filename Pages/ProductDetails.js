import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import NumericInput from "react-native-numeric-input";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useProducts from "../hooks/useProducts";
import BottomBar from "../Components/BottomNavBar";
import { useRoute } from "@react-navigation/native";

export default function ProductDetails({ navigation }) {
  const { allProducts, setAllProducts } = useProducts();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelctedColor] = useState("");
  const route = useRoute();
  const productId = route.params?.id;

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
    require("../assets/stock.jpg"),
  ];

  useEffect(() => {
    if (allProducts) {
      setLoading(false);
      setProduct(allProducts.find((product) => product.id === productId));
    } else {
      setLoading(true);
    }
  }, [allProducts]);

  const [productCount, setProductCount] = useState(0);
  const handleNumberChange = (value) => {
    setProductCount(value);
  };

  return (
    <>
      {loading ? (
        <Text>loading</Text>
      ) : (
        <View style={{ height: "100%", backgroundColor: "#f2f6f9" }}>
          <ScrollView contentContainerStyle={styles.container}>
            <Icon
              name={"chevron-left"}
              style={{
                fontSize: 55,
                color: "black",
                position: "absolute",
                left: 5,
                top: 14,
                zIndex: 1,
              }}
              onPress={() => navigation.navigate("Products")}
            />
            <Image
              source={images[productId - 1]}
              style={{ width: "100%", height: 400 }}
              resizeMode="stretch"
            ></Image>
            <View style={styles.space} />
            <Text
              style={{
                fontWeight: "bold",
                paddingHorizontal: 13,
                fontSize: 25,
              }}
            >
              {product?.product_name}
            </Text>
            <View style={styles.space} />
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 50,
                flexWrap:"wrap",
                justifyContent: "space-between",
                alignItems: "center",
                height: 70,
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  height: 40,
                }}
              >
                ${product?.Price}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Stars
                  default={product?.Rating}
                  count={5}
                  half={true}
                  disabled={true}
                  starSize={50} // Adjust the star size
                  fullStar={
                    <Icon
                      name={"star"}
                      style={{ color: "#fdc208", fontSize: 30 }}
                    />
                  }
                  emptyStar={
                    <Icon name={"star-outline"} style={{ fontSize: 30 }} />
                  }
                  halfStar={
                    <Icon
                      name={"star-half"}
                      style={{ color: "#fdc208", fontSize: 30 }}
                    />
                  }
                />
              </View>
            </View>

            <View style={styles.space} />

            <View
              style={{ width: "90%", height: 1, backgroundColor: "#dee0e2" }}
            />
            <View style={styles.space} />
            <Text
              style={{
                fontWeight: "bold",
                paddingHorizontal: 13,
                fontSize: 30,
                alignSelf: "flex-start",
              }}
            >
              Colors 
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 36,
                alignSelf: "flex-start",
                justifyContent: "flex-start",
                alignItems: "center",
                height: 30,
                width: "100%",
                marginVertical: 25,
              }}
            >
              {product?.Colors.split(",").map((color, index) => (
                <>
                  <TouchableOpacity
                    key={index}
                    name="chosenColor"
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 50,
                      marginRight: 20,
                      backgroundColor: `${color}`,
                      borderWidth: color === selectedColor ? 2 : (color === 'white' ? 1 : 0),
                      borderColor: color === selectedColor ? "red":"black"
                    }}
                    onPress={(e) => {
                      setSelctedColor(color);
                    }}
                  ></TouchableOpacity>
                </>
              ))}
            </View>
            <View
              style={{ width: "90%", height: 1, backgroundColor: "#dee0e2" }}
            />

            <View style={styles.space} />

            <Text
              style={{
                fontWeight: "bold",
                paddingHorizontal: 13,
                fontSize: 30,
                alignSelf: "flex-start",
              }}
            >
              Description
            </Text>

            <Text
              style={{
                paddingHorizontal: 25,
                fontSize: 22,
                alignSelf: "flex-start",
              }}
            >
              {product?.product_description}
            </Text>

            <View style={styles.space} />

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 13,
                alignSelf: "flex-start",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                marginVertical: 8,
              }}
            >
              <Text style={{ fontSize: 25, alignSelf: "flex-start" }}>
                Category
              </Text>

              <Text
                style={{
                  paddingHorizontal: 15,
                  fontSize: 25,
                  alignSelf: "flex-start",
                }}
              >
                :
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  width: "70%",
                  flexWrap: "wrap",
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontSize: 25,
                    fontWeight: "bold",
                  }}
                >
                  #{product?.Category}
                </Text>
              </View>
            </View>
            <View style={styles.space} />

            <View
              style={{ width: "90%", height: 1, backgroundColor: "#dee0e2" }}
            />
            <View style={styles.space} />

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 13,
                alignSelf: "flex-start",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <NumericInput
                totalWidth={90}
                totalHeight={50}
                value={productCount}
                onChange={handleNumberChange}
                iconSize={5}
                step={1}
                valueType="integer"
                rounded
                type="up-down"
                textColor="black"
                iconStyle={{ color: "black" }}
              />
              <TouchableOpacity style={{ marginLeft: 10, width: "70%" }}>
                <Text
                  style={{
                    backgroundColor: "black",
                    fontSize: 25,
                    borderRadius: 12,
                    paddingVertical: 10,
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    textAlign: "center",
                  }}
                >
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.space} />
          </ScrollView>

          <BottomBar navigation={navigation} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
    backgroundColor: "#f2f6f9",
    alignItems: "center",
  },
  space: {
    height: 16,
  },
});
