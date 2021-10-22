import { VectorMap } from "@react-jvectormap/core";
import { inMerc, inMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/India",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: inMerc,
  fileName: "inMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: inMill,
  fileName: "inMill",
};
