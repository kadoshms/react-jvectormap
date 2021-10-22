import { VectorMap } from "@react-jvectormap/core";
import { nlMerc, nlMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/Netherlands",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: nlMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: nlMill,
};
