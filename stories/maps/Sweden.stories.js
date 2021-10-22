import { VectorMap } from "@react-jvectormap/core";
import { seMerc, seMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Sweden",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: seMerc,
  fileName: "seMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: seMill,
  fileName: "seMill",
};
