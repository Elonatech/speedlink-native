import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Footer = () => {
  const [expandedItems, setExpandedItems] = useState({
    digitalServices: false,
    cloudServices: false,
    networkingServices: false,
    certifiedTraining: false
  });

  const toggleExpand = (item) => {
    setExpandedItems({
      ...expandedItems,
      [item]: !expandedItems[item]
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Image
          source={{
            uri: "https://speedlinkng.com/wp-content/uploads/2022/09/speedlink-logo-footer.png"
          }}
          style={styles.logo}
        />
        <Text style={styles.text}>
          Providing ICT solutions that make businesses stand out. We can provide
          you with the highest levels of technical expertise, strategic
          thinking, and hands-on skills.
        </Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.heading}>Services</Text>
        <TouchableOpacity
          style={[
            styles.serviceItem,
            expandedItems.digitalServices && styles.expandedItem
          ]}
          onPress={() => toggleExpand("digitalServices")}
        >
          {expandedItems.digitalServices ? (
            <MaterialIcons name="arrow-drop-up" style={styles.arrowIcon} />
          ) : (
            <MaterialIcons name="arrow-drop-down" style={styles.arrowIcon} />
          )}
          <Text style={styles.serviceText}>Digital Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.serviceItem,
            expandedItems.cloudServices && styles.expandedItem
          ]}
          onPress={() => toggleExpand("cloudServices")}
        >
          {expandedItems.cloudServices ? (
            <MaterialIcons name="arrow-drop-down" style={styles.arrowIcon} />
          ) : (
            <MaterialIcons name="arrow-drop-down" style={styles.arrowIcon} />
          )}
          <Text style={styles.serviceText}>Cloud Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.serviceItem,
            expandedItems.networkingServices && styles.expandedItem
          ]}
          onPress={() => toggleExpand("networkingServices")}
        >
          {expandedItems.networkingServices ? (
            <MaterialIcons name="arrow-drop-up" style={styles.arrowIcon} />
          ) : (
            <MaterialIcons name="arrow-drop-down" style={styles.arrowIcon} />
          )}
          <Text style={styles.serviceText}>Networking Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.serviceItem,
            expandedItems.certifiedTraining && styles.expandedItem
          ]}
          onPress={() => toggleExpand("certifiedTraining")}
        >
          {expandedItems.certifiedTraining ? (
            <MaterialIcons name="arrow-drop-up" style={styles.arrowIcon} />
          ) : (
            <MaterialIcons name="arrow-drop-down" style={styles.arrowIcon} />
          )}
          <Text style={styles.serviceText}>Certified Training</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        <Text style={styles.heading}>Quick Links</Text>
        <TouchableOpacity style={styles.link}>
          <MaterialIcons name="arrow-drop-down" style={styles.arrowIcon} />
          <Text style={styles.linkText}>Our Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <MaterialIcons name="arrow-drop-down" style={styles.arrowIcon} />
          <Text style={styles.linkText}>Case Studies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <MaterialIcons name="arrow-drop-down" style={styles.arrowIcon} />
          <Text style={styles.linkText}>Who we are</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <MaterialIcons name="arrow-drop-down" style={styles.arrowIcon} />
          <Text style={styles.linkText}>Why choose us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <MaterialIcons name="arrow-drop-down" style={styles.arrowIcon} />
          <Text style={styles.linkText}>What we do</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <MaterialIcons name="arrow-drop-down" style={styles.arrowIcon} />
          <Text style={styles.linkText}>Meet our Team</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.column} >
        <Text style={styles.heading}>Locate us</Text>
        <Text style={styles.address}>
          Road 6 Extension, Okey Wali Estate, Rumualoglu, Port Harcourt, Rivers
          State
        </Text>
        <View style={styles.contactInfo} >
          <Text style={styles.contactText} >
            <Ionicons name="call" size={20} style={styles.contactIcon} />{" "}
            +2349167716220
          </Text>
          <Text style={styles.contactText}>
            <Ionicons size={20} name="mail" /> admin@speedlinkng.com
          </Text>
        </View>
        <View style={styles.socialIcons}>
          <Ionicons name="logo-facebook" style={styles.socialIcon} />
          <Ionicons name="logo-twitter" style={styles.socialIcon} />
          <Ionicons name="logo-youtube" style={styles.socialIcon} />
          <Ionicons name="logo-instagram" style={styles.socialIcon} />
          <Ionicons name="logo-linkedin" style={styles.socialIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#0a0e27",
    padding: 20
  },
  column: {
    flex: 1,
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: "#1a2238",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    margin:10
  },
  logo: {
    width: 200,
    height: 50,
    marginBottom: 15
  },
  text: {
    color: "#ffffff",
    textAlign: "center"
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center"
  },
  serviceItem: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10
  },
  serviceText: {
    color: "#ffffff",
    fontSize: 16
  },
  expandedItem: {
    height: "auto",
    opacity: 1
  },
  arrowIcon: {
    marginRight: 10,
    fontSize: 24, // Adjust size as needed
    color: "#ffffff"
  },
  link: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 5
  },
  linkText: {
    color: "#ffffff",
    fontSize: 16
  },
  address: {
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center"
  },
  contactInfo: {
    marginBottom: 10
  },
  contactText: {
    color: "#ffffff",
    marginBottom: 5
  },
  contactIcon: {
    fontSize: 20,
    marginRight: 5,
    color: "#ffffff"
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
    marginTop: 15
  },
  socialIcon: {
    fontSize: 24,
    color: "#ffffff"
  }
});

export default Footer;
