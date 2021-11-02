import { VectorMap } from "@react-jvectormap/core";
import { ukRegionsMill, ukRegionsMerc, README } from "@react-jvectormap/maps";
import {
  ukRegionsMill,
  ukRegionsMerc,
  README,
} from "@react-jvectormap/ukregions";
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
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: ukRegionsMerc,
  fileName: "ukRegionsMerc",
};
