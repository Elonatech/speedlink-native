import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CertificationSection = () => {
  return (
    <View className="w-full bg-[#02176d] p-16 border rounded-lg ">
   
     <Image
          height={180}
          width={350}
          source={{
            uri: "https://speedlinkng.com/wp-content/uploads/2024/02/pearson-vue-1.gif"
          }}

       
        />
   
      <View>
        <Text className="py-4 font-bold text-white text-2xl">Pursue Your Certification Dreams with Speedlink!</Text>
        <Text className="text-white text-xl">
          We’re excited to announce that we’re now an official Pearson VUE
          testing center! Schedule your exam today and unlock your full
          potential.
        </Text>
      </View>
      <TouchableOpacity className="py-3">
        <Text className="bg-red-600 border border-red-600 text-white flex text-center p-2 rounded-lg font-medium text-lg">Get Certified</Text>
      </TouchableOpacity>
    </View>
  );
};


export default CertificationSection;
