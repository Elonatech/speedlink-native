import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import Octicons from "@expo/vector-icons/Octicons";


const Technology = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Technology stack</Text>

      <View style={styles.dotContainer}>
        <Octicons style={styles.dot} name="dot-fill" size={24} color="white" />
        <Octicons style={styles.dot} name="dot-fill" size={24} color="white" />
        <Octicons style={styles.dot} name="dot-fill" size={24} color="white" />
        <Octicons style={styles.dot} name="dash" size={24} color="white" />
      </View>

      <Swiper
        style={styles.swiper}
        showsPagination={false}
        showsButton={false}
        autoplay
        autoplayTimeout={3000}
        loop={true}
      >
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/c-sharp-icon-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/android-logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/postgre-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/Node-Js-Logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/Gulp-logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/React-icon-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/css-3-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/python-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/php-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
            }}
            style={styles.image}
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    paddingVertical: 48,
    alignItems: "center"
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  dot: {
    color: "rgb(12, 91, 210)",
    fontSize: 24,
    marginHorizontal: 5
  },
  dash: {
    color: "blue",
    fontSize: 64,
    marginBottom: -30 // Adjust as needed for alignment
  },
  swiper: {
    width: "100%",
    height: 120
  },
  slide: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain"
  }
});

export default Technology;
