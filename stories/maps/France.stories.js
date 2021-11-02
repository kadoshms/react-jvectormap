import { VectorMap } from "@react-jvectormap/core";
import { frMill, frMerc, README } from "@react-jvectormap/maps";
import { frMill, frMerc, README } from "@react-jvectormap/france";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/France",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: frMill,
  fileName: "frMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: frMerc,
  fileName: "frMerc",
};
