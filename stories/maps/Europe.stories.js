import { VectorMap } from "@react-jvectormap/core";
import { europeMill, europeMerc } from "@react-jvectormap/europe";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Europe",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: europeMill,
  fileName: "europeMill",
  country: "europe",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: europeMerc,
  fileName: "europeMerc",
  country: "europe",
};
