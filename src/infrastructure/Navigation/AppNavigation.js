/* eslint-disable prettier/prettier */
import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantNavigation } from "./RestaurantNavigation";
const Tab = createBottomTabNavigator();

const SettingsScreen = () => <Text>Settings</Text>;

const MapScreen = () => <Text>Map</Text>;

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Restaurant") {
              iconName = focused
                ? "md-restaurant-sharp"
                : "md-restaurant-outline";
            } else if (route.name === "Map") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "md-settings-sharp" : "md-settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#325d7f",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Restaurant" component={RestaurantNavigation} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
