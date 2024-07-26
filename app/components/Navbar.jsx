import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className=" mt-12 p-4 flex-row justify-between items-center">
      <Image
        className=""
        source={{
          uri: "https://speedlinkng.com/wp-content/uploads/2023/06/1-300x125.png"
        }}
        width={300}
        height={125}
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
