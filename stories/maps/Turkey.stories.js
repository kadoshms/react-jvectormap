import { VectorMap } from "@react-jvectormap/core";
import { thMill, thMerc } from "@react-jvectormap/thailand";
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
  country: "thailand",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: thMerc,
  fileName: "thMerc",
  country: "thailand",
};
