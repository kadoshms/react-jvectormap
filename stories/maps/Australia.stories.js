import { VectorMap } from "@react-jvectormap/core";
import { auMill, auMerc, README } from "@react-jvectormap/maps";
import { auMill, auMerc, README } from "@react-jvectormap/australia";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Australia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: auMill,
  fileName: "auMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: auMerc,
  fileName: "auMerc",
};
