import { VectorMap } from "@react-jvectormap/core";
import { auMerc, auMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/Australia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: auMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: auMill,
};
