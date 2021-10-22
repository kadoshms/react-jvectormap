import { VectorMap } from "@react-jvectormap/core";
import { zaMerc, zaMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/SouthAfrica",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: zaMerc,
  fileName: "zaMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: zaMill,
  fileName: "zaMill",
};
