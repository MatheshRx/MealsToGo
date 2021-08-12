/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../Services/location/location.context";
const SearchView = styled(View)`
  padding: 8px;
  background-color: #325d7f;
  flex-direction: row;
  justify-content: center;
`;

const SearchBox = styled(Searchbar)`
  width: 300px;
`;
export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  return (
    <SearchView>
      <SearchBox
        placeholder="Search Location"
        value={searchKeyword}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchView>
  );
};
