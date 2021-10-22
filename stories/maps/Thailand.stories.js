import { VectorMap } from "@react-jvectormap/core";
import { thMerc, thMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Thailand",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: thMerc,
  fileName: "thMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: thMill,
  fileName: "thMill",
};
