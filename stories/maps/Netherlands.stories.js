import { VectorMap } from "@react-jvectormap/core";
import { nlMerc, nlMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Netherlands",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: nlMerc,
  fileName: "nlMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: nlMill,
  fileName: "nlMill",
};
