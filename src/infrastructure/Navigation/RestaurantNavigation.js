/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantScreen } from "../../Features/Restaurants/Screens/RestaurantScreen";

const RestaurantStack = createStackNavigator();
const RestaurantDetail = () => (
  <View>
    <Text>Restaurant Detail</Text>
  </View>
);

export const RestaurantNavigation = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerMode: "none" }}>
      <RestaurantStack.Screen
        name="RestaurantsScreen"
        component={RestaurantScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
