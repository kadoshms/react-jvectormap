import { VectorMap } from "@react-jvectormap/core";
import { chMerc, chMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Switzerland",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: chMerc,
  fileName: "chMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: chMill,
  fileName: "chMill",
};
