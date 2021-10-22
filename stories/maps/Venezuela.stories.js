import { VectorMap } from "@react-jvectormap/core";
import { veMerc, veMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Venezuela",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: veMerc,
  fileName: "veMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: veMill,
  fileName: "veMill",
};
