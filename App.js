import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { RestaurantScreen } from "./src/Features/Restaurants/Screens/Screen";
import { ThemeProvider } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/Services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/Services/location/location.context";

const Tab = createBottomTabNavigator();

const SettingsScreen = () => <Text>Settings</Text>;

const MapScreen = () => <Text>Map</Text>;

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
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
                      iconName = focused
                        ? "md-settings-sharp"
                        : "md-settings-outline";
                    }

                    // You can return any component that you like here!
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                  tabBarActiveTintColor: "#325d7f",
                  tabBarInactiveTintColor: "gray",
                })}
              >
                <Tab.Screen name="Restaurant" component={RestaurantScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
