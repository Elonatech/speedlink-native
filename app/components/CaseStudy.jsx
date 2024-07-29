import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";




const CaseStudies = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Case Studies</Text>
      <View className="p-[13px]">
        <Text className="font-semibold text-base">
          We’re proud to have helped build innovative solutions solving complex
          problems across varying industries. Check out what we’ve been up to.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            See more of our works{"  "}
            <FontAwesome name="send-o" size={24} color="white" />
          </Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/pexels-christina-morillo-1181244-qlr0q7d26yjle1wxvxacrmfqfvrovgbuxrrizsl79c.jpg"
          }}
          className="w-full h-48 mt-8"
        />
      </View>

      <View style={styles.caseStudyContainer}>
        <View style={styles.caseStudyContent}>
          <Text style={styles.caseStudyTitle}>
            Integration of a secured and reliable examination platform
          </Text>
          <Text style={styles.caseStudyText}>
            We built a hitch-free proctoring software for the School of Public
            Health, University of Port Harcourt that offers students and test
            takers the freedom to take a proctored exam at any time in any given
            location…
          </Text>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View Case study</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.caseStudyContainer}>
        <Image
          source={{
            uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/training-comressesd-scaled-qlr0q7d26yjle1wxvxacrmfqfvrovgbuxrrizsl79c.webp"
          }}
          className="w-full h-48"
        />
        <View style={styles.caseStudyContent} className="my-4">
          <Text style={styles.caseStudyTitle}>Hybrid Learning Facility</Text>
          <Text style={styles.caseStudyText}>
            We developed a platform that can accommodate students who are unable
            to attend classes in person while also allowing students to attend
            classes in person or remotely with real-time audio and visual
            communication…
          </Text>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View Case study</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"column",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#ffffff" // Adjust background color as needed
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold"
  },


  button: {
    flexDirection: "column",
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: "#000000", // Adjust border color as needed
    backgroundColor: "#ef1821",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: "#ffffff",
    paddingHorizontal: 10,
    textAlign: "center"
  },
  caseStudyContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20
  },
  caseStudyContent: {
    flex: 1,
    backgroundColor: "#ffffff", // Adjust background color as needed
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Android shadow
    shadowColor: "#000000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 20
  },
  caseStudyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  caseStudyText: {
    fontSize: 16,
    marginBottom: 10
  },
  viewButton: {
    flexDirection: "column",
    height: 40,
    borderWidth: 1,
    borderColor: "#000000", // Adjust border color as needed
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10
  },
  viewButtonText: {
    color: "#ffffff",
    paddingHorizontal: 10,
    textAlign: "center"
  },
 
});

export default CaseStudies;
