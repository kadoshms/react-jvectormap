import { VectorMap } from "@react-jvectormap/core";

import { default as GDPByCountryVisualizationArgs } from "./VectorMapExamples/GDPByCountryVisualization";
import { default as MarkersOnTheWorldMapArgs } from "./VectorMapExamples/MarkersOnTheWorldMap";
import { default as USAUnemploymentArgs } from "./VectorMapExamples/USAUnEmployment";
import { default as RegionsSelectionArgs } from "./VectorMapExamples/RegionsSelection";

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

export const RegionSelection = VectorMapTemplate.bind({});
RegionSelection.args = RegionsSelectionArgs;
