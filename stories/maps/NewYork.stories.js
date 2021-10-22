import { VectorMap } from "@react-jvectormap/core";
import { usNyNewYorkMerc, usNyNewYorkMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/NewYork",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: usNyNewYorkMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: usNyNewYorkMill,
};
