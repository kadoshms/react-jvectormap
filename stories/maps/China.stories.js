import { VectorMap } from "@react-jvectormap/core";
import { cnMerc, cnMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/China",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: cnMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: cnMill,
};
