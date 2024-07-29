import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NavBar = () => {
  const [shadow, setShadow] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleShadow = () => {
      // Simulating window scroll behavior in React Native
      // Replace with actual scroll handling if needed
      setShadow(true); // Simulate shadow on scroll
    };

    // Add event listener for scroll
    // Replace with actual scroll listener if needed
    handleShadow(); // Initially set shadow state
    // Clean up
    return () => {
      // Remove event listener if necessary
    };
  }, []);

  return (
    <View style={shadow ? styles.navBarShadow : styles.navBar}>
      <View style={styles.navBarContent}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.logoText}>AMAZING</Text>
        </TouchableOpacity>
        <View style={styles.menuIcons}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://wa.me/message/DRNZZWQTUD6KK1")
            }
          >
            <Ionicons
              name="logo-whatsapp"
              size={35}
              color="#FFFFFF"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://twitter.com/theamazingJosh_?t=Fd8bDkjcxRV8G1JQQQH3PQs=09"
              )
            }
          >
            <Ionicons
              name="logo-twitter"
              size={35}
              color="#FFFFFF"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("mailto:theamazingkeyz@gmail.com")}
          >
            <Ionicons
              name="mail-outline"
              size={35}
              color="#FFFFFF"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu}>
            <Ionicons
              name="menu-outline"
              size={35}
              color="#FFFFFF"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {menu && (
        <View style={styles.mobileMenu}>
          <View style={styles.menuHeader}>
            <Text style={styles.menuHeaderText}>AMAZING</Text>
            <TouchableOpacity onPress={toggleMenu} style={styles.closeIcon}>
              <Ionicons name="close-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <Text style={styles.menuDescription}>
            Listen and download your favorite songs
          </Text>
          <View style={styles.menuIcons}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://wa.me/message/DRNZZWQTUD6KK1")
              }
            >
              <Ionicons
                name="logo-whatsapp"
                size={40}
                color="#FFFFFF"
                style={styles.menuIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://twitter.com/theamazingJosh_?t=Fd8bDkjcxRV8G1JQQQH3PQs=09"
                )
              }
            >
              <Ionicons
                name="logo-twitter"
                size={40}
                color="#FFFFFF"
                style={styles.menuIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("mailto:theamazingkeyz@gmail.com")}
            >
              <Ionicons
                name="mail-outline"
                size={40}
                color="#FFFFFF"
                style={styles.menuIcon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.connectButton}>
            <Text style={styles.connectButtonText}>Let's Connect</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#000000",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    elevation: 0
  },
  navBarShadow: {
    backgroundColor: "#000000",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    elevation: 5
  },
  navBarContent: {
    flexDirection: "row",
    alignItems: "center"
  },
  logoText: {
    color: "#FF0000",
    fontSize: 24,
    fontWeight: "bold"
  },
  menuIcons: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginHorizontal: 8
  },
  mobileMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#ECF0F3",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  menuHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  menuHeaderText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold"
  },
  closeIcon: {
    padding: 10
  },
  menuDescription: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20
  },
  menuIcon: {
    borderRadius: 20,
    backgroundColor: "#1F2937",
    padding: 10,
    marginHorizontal: 8
  },
  connectButton: {
    backgroundColor: "#1F2937",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 20
  },
  connectButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default NavBar;
