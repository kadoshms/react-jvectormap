import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import * as maps from "@react-jvectormap/maps";
import { MapContainer } from "./components/MapContainer/MapContainer";
import { gdpData } from "./data/gdpData";

export default {
  title: "core/VectorMap",
  component: VectorMap,
  argTypes: {},
};

const Template = (args) => (
  <MapContainer>
    <VectorMap {...args} />
  </MapContainer>
);

export const GDPByCountryVisualization = Template.bind({});

GDPByCountryVisualization.args = {
  map: maps.worldMill,
  onRegionTipShow: (e, el, code) => {
    el.html(el.html() + " (GDP - " + gdpData[code] + ")");
  },
  series: {
    regions: [
      {
        values: gdpData,
        scale: ["#C8EEFF", "#0071A4"],
        normalizeFunction: "polynomial",
      },
    ],
  },
};
