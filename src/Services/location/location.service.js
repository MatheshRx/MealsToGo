/* eslint-disable prettier/prettier */
import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("Location not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const camelizedResults = camelize(result);

  const { geometry = {} } = camelizedResults.results[0];

  const { lng, lat } = geometry.location;

  return { lng, lat };
};
