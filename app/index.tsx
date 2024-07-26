import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import NavBar from "../app/components/Navbar"
import Home from "../app/components/Home"
import AboutUs from "../app/components/AboutUs"


export default function App() {
  return (
    <>
      <ScrollView>
        <NavBar />
        <Home />
        <AboutUs />
      </ScrollView>
    </>
  );
}