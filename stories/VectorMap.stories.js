import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import * as maps from "@react-jvectormap/maps";
import { MapContainer } from "./components/MapContainer/MapContainer";
import { gdpData } from "./data/gdpData";
import { USAUnemploymentData } from "./data/USAUnemploymentData";

import { default as GDPByCountryVisualizationArgs } from "./VectorMapExamples/GDPByCountryVisualization";
import { default as MarkersOnTheWorldMapArgs } from "./VectorMapExamples/MarkersOnTheWorldMap";
import { VectorMapTemplate } from "./components/MapContainer/VectorMapTemplate";

export default {
  title: "core/VectorMap",
  component: VectorMap,
  argTypes: {},
};

export const GDPByCountryVisualization = VectorMapTemplate.bind({});

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

// const val = 2009;
// const statesValues = jvm.values.apply(
//   {},
//   jvm.values(USAUnemploymentData.states),
// );
// const metroPopValues = Array.prototype.concat.apply(
//   [],
//   jvm.values(USAUnemploymentData.metro.population),
// );
// const metroUnemplValues = Array.prototype.concat.apply(
//   [],
//   jvm.values(USAUnemploymentData.metro.unemployment),
// );
