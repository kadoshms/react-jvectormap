import { VectorMap } from "@react-jvectormap/core";

import { default as GDPByCountryVisualizationArgs } from "./VectorMapExamples/GDPByCountryVisualization";
import { default as MarkersOnTheWorldMapArgs } from "./VectorMapExamples/MarkersOnTheWorldMap";
import { default as USAUnemploymentArgs } from "./VectorMapExamples/USAUnEmployment";
import { default as RegionsSelectionArgs } from "./VectorMapExamples/RegionsSelection";
import { default as FranceElectionsArgs } from "./VectorMapExamples/FranceElections";
import {
  default as RandomColorsArgs,
  RandomColorsTemplate,
} from "./VectorMapExamples/RandomColors";

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

export const FranceElections = VectorMapTemplate.bind({});
FranceElections.args = FranceElectionsArgs;

export const RandomColors = RandomColorsTemplate.bind({});
RandomColors.args = RandomColorsArgs;
