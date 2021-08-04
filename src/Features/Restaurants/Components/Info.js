/* eslint-disable prettier/prettier */
import React from "react";
import { Card } from "react-native-paper";
import Star from "../../../../assets/Star";
import Open from "../../../../assets/Open";
import { SvgXml } from "react-native-svg";
import {
  RestaurantCardCover,
  Title,
  Section,
  Rating,
  OpenResult,
  Closed,
  Icon,
  Address,
} from "./InfoStyle";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Bhoopathy Tea Stall",
    address = "20 rajaManagar",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    image = ["https://picsum.photos/300"],
    isOpen = true,
    rating = 4,
    isClosed = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <Card elevation={5}>
      <RestaurantCardCover source={{ uri: image[0] }} />
      <Title>{name}</Title>
      <Section>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml
              xml={Star}
              width={20}
              height={20}
              key={Math.random().toString()}
            />
          ))}
        </Rating>
        <OpenResult>
          {isClosed && <Closed> Closed Temporarily :(</Closed>}
          {isOpen && <SvgXml xml={Open} width={20} height={20} />}
          <Icon source={{ uri: icon }} />
        </OpenResult>
      </Section>
      <Address>{address}</Address>
    </Card>
  );
};
