import { VectorMap } from "@react-jvectormap/core";
import { deMerc, deMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/Germany",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: deMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: deMill,
};
