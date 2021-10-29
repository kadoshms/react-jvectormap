import { VectorMap } from "@react-jvectormap/core";
import { zaMill, zaMerc } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/SouthAfrica",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: zaMill,
  fileName: "zaMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: zaMerc,
  fileName: "zaMerc",
};
