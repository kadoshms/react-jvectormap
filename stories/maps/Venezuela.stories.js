import { VectorMap } from "@react-jvectormap/core";
import { veMill, veMerc, README } from "@react-jvectormap/maps";
import { veMill, veMerc, README } from "@react-jvectormap/venezuela";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Venezuela",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: veMill,
  fileName: "veMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: veMerc,
  fileName: "veMerc",
};
