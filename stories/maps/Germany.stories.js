import { VectorMap } from "@react-jvectormap/core";
import { deMill, deMerc } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Germany",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: deMill,
  fileName: "deMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: deMerc,
  fileName: "deMerc",
};
