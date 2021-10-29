import { VectorMap } from "@react-jvectormap/core";

import { default as GDPByCountryVisualizationArgs } from "./VectorMapExamples/GDPByCountryVisualization";
import { default as MarkersOnTheWorldMapArgs } from "./VectorMapExamples/MarkersOnTheWorldMap";
import { default as USAUnemploymentArgs } from "./VectorMapExamples/USAUnEmployment";
import { default as RegionsSelectionArgs } from "./VectorMapExamples/RegionsSelection";
import { default as FranceElectionsArgs } from "./VectorMapExamples/FranceElections";
import { default as RegionLabelsArgs } from "./VectorMapExamples/RegionLabels";
import { default as MallMapArgs } from "./VectorMapExamples/MallMap";
import { default as MarkerIconsArgs } from "./VectorMapExamples/MarkerIcons";
import { default as MapLegendsArgs } from "./VectorMapExamples/MapLegends";
import { default as DynamicRegionStyleArgs } from "./VectorMapExamples/DynamicRegionStyle";

import {
  default as ReverseProjectionArgs,
  ReverseProjectionTemplate,
} from "./VectorMapExamples/ReverseProjection";

import {
  default as RandomColorsArgs,
  RandomColorsTemplate,
} from "./VectorMapExamples/RandomColors";

import {
  default as FocusOnCountriesArgs,
  FocusOnCountriesTemplate,
} from "./VectorMapExamples/FocusOnCountries";

import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

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

export const MallMap = VectorMapTemplate.bind({});
MallMap.args = MallMapArgs;

export const ReverseProjection = ReverseProjectionTemplate.bind({});
ReverseProjection.args = ReverseProjectionArgs;

export const RegionLabels = VectorMapTemplate.bind({});
RegionLabels.args = RegionLabelsArgs;

export const MapLegends = VectorMapTemplate.bind({});
MapLegends.args = MapLegendsArgs;

export const MarkerIcons = VectorMapTemplate.bind({});
MarkerIcons.args = MarkerIconsArgs;

export const DynamicRegionStyle = VectorMapTemplate.bind({});
DynamicRegionStyle.args = DynamicRegionStyleArgs;

export const FocusOnCountries = FocusOnCountriesTemplate.bind({});
FocusOnCountries.args = FocusOnCountriesArgs;
