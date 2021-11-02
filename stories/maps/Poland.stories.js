import { VectorMap } from "@react-jvectormap/core";
import { plMill, plMerc } from "@react-jvectormap/poland";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Poland",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: plMill,
  fileName: "plMill",
  country: "poland",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: plMerc,
  fileName: "plMerc",
  country: "poland",
};
