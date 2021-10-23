import { VectorMap } from "@react-jvectormap/core";
import { plMerc, plMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Poland",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: plMerc,
  fileName: "plMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: plMill,
  fileName: "plMill",
};
