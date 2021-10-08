import { MapContainer } from "./MapContainer";
import React from "react";
import { VectorMap } from "@react-jvectormap/core";

export const VectorMapTemplate = (args) => (
  <MapContainer description={args.description}>
    <VectorMap {...args} />
  </MapContainer>
);
