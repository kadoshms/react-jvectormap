import { VectorMap } from "@react-jvectormap/core";
import { noMill, noMerc } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Norway",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: noMill,
  fileName: "noMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: noMerc,
  fileName: "noMerc",
};
