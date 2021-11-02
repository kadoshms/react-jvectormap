import { VectorMap } from "@react-jvectormap/core";
import { chMill, chMerc } from "@react-jvectormap/switzerland";
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
  country: "switzerland",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: chMerc,
  fileName: "chMerc",
  country: "switzerland",
};
