import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className=" min-w-full p-4 flex-row justify-between items-center">
      <Image
        className=""
        source={{
          uri: "https://speedlinkng.com/wp-content/uploads/2023/06/1-300x125.png"
        }}
        width={155}
        height={65}
      />
      <TouchableOpacity onPress={toggleMenu}>
        {isOpen ? (
          <SimpleLineIcons name="menu" size={24} color="black" />
        ) : (
          <FontAwesome5 name="times" size={24} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
