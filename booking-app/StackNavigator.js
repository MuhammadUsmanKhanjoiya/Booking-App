import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import SavedScreen from "./screens/SavedScreen";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#003580" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="#003580" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLabel: "Bookings",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications" size={24} color="#003580" />
              ) : (
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#003580" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name="Main" component={BottomTabs} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen
    alignItems: "center", // Centers content horizontally
    justifyContent: "center",
  },
});
