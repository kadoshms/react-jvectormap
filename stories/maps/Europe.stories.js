import { VectorMap } from "@react-jvectormap/core";
import { europeMerc, europeMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/Europe",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: europeMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: europeMill,
};
