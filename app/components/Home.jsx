import React from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

// Home screen component
const Home = () => {
  return (
    <View className="flex-1 object-cover ">
      <Video
        source={{
          uri: "https://res.cloudinary.com/dny7tqd0d/video/upload/v1720457608/Circuit-27725_xvfck7.mp4"
        }}
        style={styles.backgroundVideo}
        resizeMode="cover"
        isLooping
        shouldPlay
        isMuted
      />
      <View className="flex-col justify-center p-10">
        <Text className="text-white font-bold text-3xl flex justify-center">
          We Provide Comprehensive IT Solutions that makes businesses stands out
        </Text>
        <Text className="text-white pt-10 text-lg">
          We are a team of IT experts who help you transform and scale up your
          organization
        </Text>

        <TouchableOpacity className="flex-row items-center justify-center  p-4 bg-blue-400 border rounded-lg">
          <AntDesign name="arrowright" size={24} color="white" />
          <Text className="uppercase text-white font-semibold text-lg">
            {" "}
            IT solutions and services
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
 
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,

  }
});

export default Home;
