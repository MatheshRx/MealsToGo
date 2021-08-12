/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  // StatusBar,
  FlatList,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfo } from "../Components/Info";
import { RestaurantsContext } from "../../../Services/restaurants/restaurants.context";

import { Search } from "../Components/SearchBar";
const Container = styled(SafeAreaView)`
  flex: 1;
`;
// * ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; there is no use to due to

const LoaderView = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <Container>
      <Search />
      {isLoading ? (
        <LoaderView>
          <ActivityIndicator
            animating={true}
            color={Colors.orange300}
            size={"large"}
          />
        </LoaderView>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfo restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.list}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
