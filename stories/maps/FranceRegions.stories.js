import { VectorMap } from "@react-jvectormap/core";
import { frRegionsMill, frRegionsMerc } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/FranceRegions",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: frRegionsMill,
  fileName: "frRegionsMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: frRegionsMerc,
  fileName: "frRegionsMerc",
};
