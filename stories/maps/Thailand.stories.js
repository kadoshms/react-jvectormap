import { VectorMap } from "@react-jvectormap/core";
import { thMill, thMerc, README } from "@react-jvectormap/maps";
import { thMill, thMerc, README } from "@react-jvectormap/thailand";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Thailand",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: thMill,
  fileName: "thMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: thMerc,
  fileName: "thMerc",
};
