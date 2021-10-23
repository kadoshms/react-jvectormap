import { VectorMap } from "@react-jvectormap/core";
import { cnMerc, cnMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/China",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: cnMerc,
  fileName: "cnMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: cnMill,
  fileName: "cnMill",
};
