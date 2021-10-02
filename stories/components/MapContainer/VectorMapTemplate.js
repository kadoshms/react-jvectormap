import { MapContainer } from "./MapContainer";
import React from "react";

const Template = (args) => (
  <MapContainer>
    <VectorMap {...args} />
  </MapContainer>
);
