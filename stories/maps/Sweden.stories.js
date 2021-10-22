import { VectorMap } from "@react-jvectormap/core";
import { seMerc, seMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/Sweden",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: seMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: seMill,
};
