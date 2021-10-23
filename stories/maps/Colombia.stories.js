import { VectorMap } from "@react-jvectormap/core";
import { coMerc, coMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Colombia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: coMerc,
  fileName: "coMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: coMill,
  fileName: "coMill",
};
