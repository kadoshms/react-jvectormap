import { VectorMap } from "@react-jvectormap/core";
import { frMerc, frMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/France",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: frMerc,
  fileName: "frMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: frMill,
  fileName: "frMill",
};
