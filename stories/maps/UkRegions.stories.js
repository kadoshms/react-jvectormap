import { VectorMap } from "@react-jvectormap/core";
import { ukRegionsMill, ukRegionsMerc } from "@react-jvectormap/ukregions";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/UkRegions",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: ukRegionsMill,
  fileName: "ukRegionsMill",
  country: "ukregions",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: ukRegionsMerc,
  fileName: "ukRegionsMerc",
  country: "ukregions",
};
