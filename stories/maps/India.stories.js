import { VectorMap } from "@react-jvectormap/core";
import { inMill, inMerc, README } from "@react-jvectormap/maps";
import { inMill, inMerc, README } from "@react-jvectormap/india";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/India",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: inMill,
  fileName: "inMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: inMerc,
  fileName: "inMerc",
};
