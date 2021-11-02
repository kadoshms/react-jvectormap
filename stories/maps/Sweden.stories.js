import { VectorMap } from "@react-jvectormap/core";
import { seMill, seMerc, README } from "@react-jvectormap/maps";
import { seMill, seMerc, README } from "@react-jvectormap/sweden";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Sweden",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: seMill,
  fileName: "seMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: seMerc,
  fileName: "seMerc",
};
