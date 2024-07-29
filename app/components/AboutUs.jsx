import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function AboutUs() {
  return (
    <View className="p-8">
      <View className="flex-col">
        <Image
          className="border border-b-4 border-b-red-600 rounded-tl-[100px] rounded-br-[50px]"
          source={{
            uri: "https://speedlinkng.com/wp-content/uploads/2022/08/Speed-web-01-1024x682.jpg"
          }} // Adjust the path to your image
          resizeMode="cover" // Adjust the resize mode as per your needs
          width={400}
          height={250}
        />
      </View>

      <Text className="text-red-500 uppercase py-4 font-semibold">
        speedlink hi-tech it solution
        <Text className="uppercase font-bold ">
          a complete it solution provider
        </Text>
      </Text>
      <Text className="py-4 font-normal text-[20px]">
        Speedlink Hi-Tech Solutions Limited is a Nigerian leading IT systems
        provider, known for providing clients with Enterprise world-class
        solutions addressing their local business needs. We deliver positive,
        rapid and the best return on investment “ROI” solutions for our
        customers.
      </Text>
      <TouchableOpacity className="border p-3 w-1/2 rounded-md bg-red-600 border-red-600 flex-row items-center ">
        <Text className="text-white font-semibold text-lg">Who are we </Text>
        <FontAwesome name="telegram" size={24} color="white" className="" />
      </TouchableOpacity>
    </View>
  );
}
