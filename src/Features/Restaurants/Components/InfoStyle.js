/* eslint-disable prettier/prettier */
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const CardMain = styled(Card)`
  margin-vertical: 8px;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: 10px;
  background-color: #fff;
`;

export const Title = styled(Text)`
  padding-horizontal: 10px;
  color: #325d7f;
  font-size: 18px;
  font-family: ${
    (props) => props.theme.fonts.heading
    /* // ! Here "react context" is used for getting props directly from were we send without any other wrapping components in this case we are getting directly from app and not from wrapping component = Screen.js */
  };
`;

export const Section = styled(View)`
  flex-direction: row;
  padding-top: 8px;
`;

export const Rating = styled(View)`
  padding-horizontal: 8px;
  flex-direction: row;
`;

export const OpenResult = styled(View)`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const Closed = styled(Text)`
  color: red;
  font-family: ${(props) => props.theme.fonts.body};
  padding-right: 10px;
  text-transform: uppercase;
`;

export const Icon = styled(Image)`
  width: 16px;
  height: 16px;
  margin-horizontal: 10px;
`;

export const Address = styled(Text)`
  padding-horizontal: 10px;
  padding-bottom: 3px;
  font-family: ${(props) => props.theme.fonts.body};
`;
