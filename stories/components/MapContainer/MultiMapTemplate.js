import { MapContainer } from "./MapContainer";
import React from "react";
import { MultiMap } from "@react-jvectormap/core";

export const MultiMapTemplate = (args) => (
  <MapContainer description={args.description}>
    <MultiMap {...args} />
  </MapContainer>
);
