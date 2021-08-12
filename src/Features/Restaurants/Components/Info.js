/* eslint-disable prettier/prettier */
import React from "react";
import Star from "../../../../assets/Star";
import Open from "../../../../assets/Open";
import { SvgXml } from "react-native-svg";
import {
  CardMain,
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
    photos = ["https://picsum.photos/2000"],
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <CardMain elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
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
          {isClosedTemporarily && <Closed> Closed Temporarily </Closed>}
          {isOpenNow && <SvgXml xml={Open} width={20} height={20} />}
          <Icon source={{ uri: icon }} />
        </OpenResult>
      </Section>
      <Address>{address}</Address>
    </CardMain>
  );
};
