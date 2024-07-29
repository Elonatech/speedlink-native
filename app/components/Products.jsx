import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TouchableHighlight } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";




const Products = () => {
      const [isPressed, setIsPressed] = useState(false);

      const handlePressIn = () =>{
        setIsPressed(true)
}

const handlePressOut = () =>{
    setIsPressed(false)
}

  return (
    <View className="">
      <LinearGradient
        colors={["rgb(6, 39, 173)", "rgb(205, 44, 50)"]}
        start={{ x: 0, y: 0 }} // start gradient from top left
        end={{ x: 1, y: 1 }} // end gradient to bottom right
        style={styles.container} // apply gradient style to container
      >
        <View>
          <Text className="text-white p-4 text-center font-bold text-2xl">
            Our Products
          </Text>
          <Text className="text-white font-bold text-3xl ">
            Comprehensive IT SOLUTION that sets your business apart
          </Text>
          <Text className="py-4 text-white font-semibold text-xl text-center">
            Bringing speed to your business
          </Text>
        </View>
        <TouchableOpacity onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <Image
            style={[styles.button, isPressed && styles.buttonPressed]}
            className="w-[375px] h-[322px] m-2"
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/lms-qlr0q7d82s1a0jmzxozozufvp8cxd3sbadz8bxwby8.jpg"
            }}
          />
          <Image
            style={[styles.button, isPressed && styles.buttonPressed]}
            className="w-[375px] h-[322px] m-2"
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/lms-2-qlr0q7d81go7a3ppqeq4sdjtvq6pcbuksft0eos2bk.jpg"
            }}
          />
          <Image
            style={[styles.button, isPressed && styles.buttonPressed]}
            className="w-[375px] h-[322px] m-2"
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/08/erp.jpg"
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity className="bg-black mx-5 my-10 p-4 border rounded-lg">
          <Text className="text-white text-xl font-medium">
            View all our products{"   "}
            <FontAwesome name="send-o" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:16
  },

  buttonHovered:{
    backgroundColor:"red"
  }
  



});



export default Products;
