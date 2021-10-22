import { VectorMap } from "@react-jvectormap/core";
import { arMerc, arMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Argentina",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: arMerc,
  fileName: "arMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: arMill,
  fileName: "arMill",
};
