import { VectorMap } from "@react-jvectormap/core";
import { europeMerc, europeMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Europe",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: europeMerc,
  fileName: "europeMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: europeMill,
  fileName: "europeMill",
};
