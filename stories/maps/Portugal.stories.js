import { VectorMap } from "@react-jvectormap/core";
import { ptMerc, ptMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/Portugal",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: ptMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: ptMill,
};
