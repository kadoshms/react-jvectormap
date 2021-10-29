import { VectorMap } from "@react-jvectormap/core";
import { cnMill, cnMerc } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/China",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: cnMill,
  fileName: "cnMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: cnMerc,
  fileName: "cnMerc",
};
