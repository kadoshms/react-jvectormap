import { VectorMap } from "@react-jvectormap/core";
import { arMill, arMerc, README } from "@react-jvectormap/maps";
import { arMill, arMerc, README } from "@react-jvectormap/argentina";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Argentina",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: arMill,
  fileName: "arMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: arMerc,
  fileName: "arMerc",
};
