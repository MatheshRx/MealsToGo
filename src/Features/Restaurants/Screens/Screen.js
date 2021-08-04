/* eslint-disable prettier/prettier */
import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../Components/Info";

const Container = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled(View)`
  padding: 16px;
  background-color: #325d7f;
`;

const ListView = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;
export const RestaurantScreen = () => {
  return (
    <Container>
      <SearchView>
        <Searchbar placeholder="City" />
      </SearchView>
      <ListView>
        <RestaurantInfo />
      </ListView>
    </Container>
  );
};
