import { VectorMap } from "@react-jvectormap/core";
import { coMill, coMerc } from "@react-jvectormap/colombia";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Colombia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: coMill,
  fileName: "coMill",
  country: "colombia",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: coMerc,
  fileName: "coMerc",
  country: "colombia",
};
