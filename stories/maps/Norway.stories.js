import { VectorMap } from "@react-jvectormap/core";
import { noMerc, noMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Norway",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: noMerc,
  fileName: "noMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: noMill,
  fileName: "noMill",
};
