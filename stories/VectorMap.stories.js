import { VectorMap } from "@react-jvectormap/core";

import { default as GDPByCountryVisualizationArgs } from "./VectorMapExamples/GDPByCountryVisualization";
import { default as MarkersOnTheWorldMapArgs } from "./VectorMapExamples/MarkersOnTheWorldMap";
import { default as USAUnemploymentArgs } from "./VectorMapExamples/USAUnEmployment";
import { VectorMapTemplate } from "./components/MapContainer/VectorMapTemplate";

export default {
  title: "core/VectorMap",
  component: VectorMap,
  argTypes: {},
};

export const GDPByCountryVisualization = VectorMapTemplate.bind({});
GDPByCountryVisualization.args = GDPByCountryVisualizationArgs;

export const MarkersOnTheWorldMap = VectorMapTemplate.bind({});
MarkersOnTheWorldMap.args = MarkersOnTheWorldMapArgs;

export const USAUnemployment = VectorMapTemplate.bind({});
USAUnemployment.args = USAUnemploymentArgs;

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
