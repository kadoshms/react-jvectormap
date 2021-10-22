import { VectorMap } from "@react-jvectormap/core";
import { inMerc, inMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/India",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: inMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: inMill,
};
