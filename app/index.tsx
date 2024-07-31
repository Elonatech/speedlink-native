import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import NavBar from "../app/components/Navbar";
import Home from "../app/components/Home";
import AboutUs from "../app/components/AboutUs";
import Offer from "../app/components/Offer";
import Certification from "../app/components/Certification";
import Industries from "../app/components/Industries";
import Topnav from "../app/components/Topnav";
import Products from "../app/components/Products";
import CaseStudies from "../app/components/CaseStudy";
import Technology from "../app/components/Technology";
import TopClients from "../app/components/TopClient";
import Footer from "../app/components/Footer";


export default function App() {
  return (
    <>
      <Topnav />
      <ScrollView className="-z-50">
        <NavBar />
        <Home />
        <AboutUs />
        <Offer />
        <Certification />
        <Industries />
        <Products />
      <CaseStudies/>
      <Technology/>
      <TopClients/>
      <Footer/>
      </ScrollView>
    </>
  );
}
