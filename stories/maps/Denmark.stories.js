import { VectorMap } from "@react-jvectormap/core";
import { dkMerc, dkMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/Denmark",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: dkMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: dkMill,
};
