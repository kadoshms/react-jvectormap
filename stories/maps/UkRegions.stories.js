import { VectorMap } from "@react-jvectormap/core";
import { ukRegionsMerc, ukRegionsMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/UkRegions",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: ukRegionsMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: ukRegionsMill,
};
