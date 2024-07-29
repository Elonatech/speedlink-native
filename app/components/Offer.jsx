import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { services } from "../components/data/OfferDetails"; // Assuming you have similar data structure


const Offer = () => {
  const [isActive, setIsActive] = useState("IT Services");

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Services we offer</Text>
        <Text style={styles.description}>
          We offer a wide range of specialized services designed to meet your
          goals
        </Text>
        <View style={styles.servicesContainer}>
          <View style={styles.servicesList}>
            {services.map((service) => (
              <TouchableOpacity
                key={service}
                style={[
                  styles.serviceItem,
                  isActive === service ? styles.activeService : null
                ]}
                onPress={() => setIsActive(service)}
              >
                <Text
                  style={[
                    styles.serviceText,
                    isActive === service ? styles.activeText : null
                  ]}
                >
                  {service}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEAEAA6"
  },
  innerContainer: {
    margin: "auto", // There's no 'auto' in React Native, you may need to adjust this based on your design
    padding: 16,
    maxWidth: 1200
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 16,
    paddingBottom: 8
  },
  description: {
    paddingBottom: 16
  },
  servicesContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  servicesList: {
    flex: 1
  },
  serviceItem: {
    borderWidth: 1,
    borderColor: "#ef1821",
    padding: 16,
    marginVertical: 4,
    borderRadius: 20
  },
  activeService: {
    backgroundColor: "#ef1821"
  },
  serviceText: {
    textAlign: "center"
  },
  activeText: {
    color: "white"
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: "#D2060FD6"
  }
  
});

export default Offer;
