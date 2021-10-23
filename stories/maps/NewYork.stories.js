import { VectorMap } from "@react-jvectormap/core";
import { usNyNewYorkMerc, usNyNewYorkMill } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/NewYork",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: usNyNewYorkMerc,
  fileName: "usNyNewYorkMerc",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: usNyNewYorkMill,
  fileName: "usNyNewYorkMill",
};
