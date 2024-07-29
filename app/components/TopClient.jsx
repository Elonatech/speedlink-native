import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

const TopClients = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Top Clients</Text>

      <Text style={styles.subheading}>Meet our happy clients</Text>

      <Swiper
        style={styles.swiper}
        autoplay
        autoplayTimeout={1000}
        loop
        showsPagination={false}
      >
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/09/redeemers-high-school.png"
            }}
            alt="Laser Engineering and Resources Consultants Limited"
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/09/primerose-highschool.png"
            }}
            alt="CGRP, University of Port Harcourt"
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/09/SPH-LOGO.png"
            }}
            alt="Foundation for Agric and Social Transformation"
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/09/cefor-logo.png"
            }}
            alt="Primerose High School"
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/09/cgrp-logo.png"
            }}
            alt="Primerose High School"
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/09/laser-engineering-2.png"
            }}
            alt="Primerose High School"
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/09/FAST-LOGO.png"
            }}
            alt="Primerose High School"
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: "center"
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center"
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  swiper: {
    height: 200
  },
  slide: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 250,
    height: 100,
    resizeMode: "contain"
  }
});

export default TopClients;
