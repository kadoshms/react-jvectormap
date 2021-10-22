import { VectorMap } from "@react-jvectormap/core";
import { auMerc, auMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Australia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: auMerc,
  fileName: "auMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: auMill,
  fileName: "auMill",
};
