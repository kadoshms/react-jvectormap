import { MapContainer } from "./MapContainer";
import React from "react";
import { VectorMap } from "@react-jvectormap/core";

export const VectorMapTemplate = (args) => (
  <MapContainer>
    <VectorMap {...args} />
  </MapContainer>
);
