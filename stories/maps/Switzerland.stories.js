import { VectorMap } from "@react-jvectormap/core";
import { chMill, chMerc, README } from "@react-jvectormap/maps";
import { chMill, chMerc, README } from "@react-jvectormap/switzerland";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Switzerland",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: chMill,
  fileName: "chMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: chMerc,
  fileName: "chMerc",
};
