import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Industries = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Industries We Serve</Text>
        <Text>
          Perfect Blend of Innovation & Ideation Of Solutions For Every
          Industry.
        </Text>
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/08/online-shop.png"
            }}
            style={styles.image}
          />
          <Text>Retail, E-commerce</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/08/elearning.png"
            }}
            style={styles.image}
          />
          <Text>Education and e-learning</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/08/fitness.png"
            }}
            style={styles.image}
          />
          <Text>Health & fitness</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/08/global-network.png"
            }}
            style={[styles.image, { height: 60 }]} // Adjusting height for this specific image
          />
          <Text>Social Networking</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/08/logistics.png"
            }}
            style={styles.image}
          />
          <Text>Logistics & distribution</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/08/enterprise.png"
            }}
            style={styles.image}
          />
          <Text>Government Institution</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/08/solution.png"
            }}
            style={styles.image}
          />
          <Text>On-Demand Solutions</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/08/real-estate.png"
            }}
            style={styles.image}
          />
          <Text>Real Estate</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/08/room-service.png"
            }}
            style={styles.image}
          />
          <Text>Travel & Hospitality</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: "https://speedlinkng.com/wp-content/uploads/2022/08/restaurant-1.png"
            }}
            style={styles.image}
          />
          <Text>Food & Restaurant</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingHorizontal: "12rem" // lg:px-[12rem] in web doesn't translate directly, adjust as needed
  },
  heading: {
    alignItems: "flex-start", // text-start doesn't exist in React Native, use alignItems
    paddingHorizontal: 40 // md:px-40
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 32 // text-4xl
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 40 // lg:p-40
  },
  gridItem: {
    width: "48%", // grid-cols-2, sm:grid-cols-3, lg:grid-cols-5 in web doesn't translate directly
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  image: {
    width: 60, // Adjust based on the image size you want
    height: 60, // Adjust based on the image size you want
    marginBottom: 10
  }
});

export default Industries;
