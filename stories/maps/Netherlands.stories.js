import { VectorMap } from "@react-jvectormap/core";
import { nlMill, nlMerc, README } from "@react-jvectormap/maps";
import { nlMill, nlMerc, README } from "@react-jvectormap/netherlands";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Netherlands",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: nlMill,
  fileName: "nlMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: nlMerc,
  fileName: "nlMerc",
};
