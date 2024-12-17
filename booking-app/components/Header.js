import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import Ionicons from '@expo/vector-icons/Ionicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import Ionicons from '@expo/vector-icons/Ionicons';
const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 65,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignContent: "center",
          padding: 7,
          color: "white",
          borderRadius: 25,
          borderColor: "white",
          borderWidth: 2,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text
          style={{
            fontSize:13,
            marginTop:2,
            color: "white",
            marginLeft: 8,
            fontWeight: "bold",
            alignItems: "center",
          }}
        >
          Stays
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignContent: "center",
          color: "white",
        
        }}
      >
       <Ionicons name="airplane-outline" size={24} color="white" />
        <Text
          style={{
            fontSize:13,
            marginTop:2,
            color: "white",
            marginLeft: 8,
            fontWeight: "bold",
            alignItems: "center",
          }}
        >
          Flights
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignContent: "center",
          color: "white",
        
        }}
      >
        <Ionicons name="car-outline" size={24} color="white" />
        <Text
          style={{
            color: "white",
            marginLeft: 8,
            fontWeight: "bold",
            fontSize:13,
            alignItems: "center",
            marginTop:2,
          }}
        >
          Car Rental
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignContent: "center",
          color: "white",
        }}
      >
        <FontAwesome5 name="uber" size={24} color="white" />
        <Text
          style={{
            marginTop:2,
            fontSize:13,
            color: "white",
            marginLeft: 5,
            fontWeight: "bold",
            alignItems: "center",
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
