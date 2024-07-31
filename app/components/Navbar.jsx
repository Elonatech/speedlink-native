import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  StyleSheet
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { A } from "@expo/html-elements";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  const handleSearch = () => {
    Alert.alert("Search", `Searching for: ${searchText}`);
    // Add your logic for searching here
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <View className=" min-w-full px-10 py-4 flex-row justify-between items-center">
        <Image
          className=""
          source={{
            uri: "https://speedlinkng.com/wp-content/uploads/2023/06/1-300x125.png"
          }}
          width={155}
          height={65}
        />
        {isOpen ? (
          <FontAwesome5
            name="times"
            size={24}
            color="black"
            onPress={toggleMenu}
          />
        ) : (
          <SimpleLineIcons
            name="menu"
            size={24}
            color="black"
            onPress={toggleMenu}
          />
        )}
      </View>
      {/* menu */}
      {isOpen ? (
        <View
          className={
            isOpen ? "fixed top-0 left-0 w-full h-full bg-white/80 " : ""
          }
        >
          <View
            className={
              isOpen
                ? "fixed left-0 w-[70%] top-0 p-10 ease-in duration-500 h-full"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
            }
          >
            <View className="">
              <View className="">
                <View className="border-[3px] rounded-2xl border-blue-900 flex-row items-center p-1 w-[350px]">
                  <TextInput
                    className="flex-1 text-lg font-medium p-1"
                    onChangeText={(text) => setSearchText(text)}
                    value={searchText}
                    placeholder="Search..."
                    keyboardType="default"
                  />
                  <Ionicons
                    name="search"
                    size={24}
                    color="black"
                    className="mr-[10px"
                  />
                </View>
              </View>
            </View>
            {/* menu */}
            <View className="pt-8">
              <TouchableOpacity className="px-4">
                <Text className="text-lg font-medium text-gray-800">Home</Text>
              </TouchableOpacity>
              <View className="mt-2 flex-row justify-between items-center w-full ml-4">
                <Text className="text-lg font-medium text-gray-800  ">
                  About Us
                </Text>
                {isExpanded ? (
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={24}
                    color="black"
                    onPress={toggleDropdown}
                  />
                ) : (
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="black"
                    onPress={toggleDropdown}
                  />
                )}
              </View>
            </View>
            {isExpanded ? (
              <View className="flex-row items-center w-full ml-4">
                <View className="flex-col">
                  <View className="flex-row items-center w-full">
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={24}
                      color="black"
                    />
                    <Text className=" text-gray-800 py-1 text-lg ">
                      Who are we{" "}
                    </Text>
                  </View>
                  <View className="flex-row items-center w-full">
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={24}
                      color="black"
                    />
                    <Text className=" text-gray-800 py-1 text-lg ">
                      Who are we{" "}
                    </Text>
                  </View>
                  <View className="flex-row items-center w-full">
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={24}
                      color="black"
                    />
                    <Text className=" text-gray-800 py-1 text-lg ">
                      What we do{" "}
                    </Text>
                  </View>
                  <View className="flex-row items-center w-full">
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={24}
                      color="black"
                    />
                    <Text className=" text-gray-800 py-1 text-lg ">
                      Meet Our team{" "}
                    </Text>
                  </View>
                  <TouchableOpacity className="flex-row items-center w-full">
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={24}
                      color="black"
                    />
                    <A href="https://onlineshop-ashy.vercel.app/">
                      {" "}
                      <Text className=" text-gray-800 py-1 text-lg ">
                        Our Products{" "}
                      </Text>
                    </A>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              ""
            )}
          </View>
        </View>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
