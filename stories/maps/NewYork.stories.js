import { VectorMap } from "@react-jvectormap/core";
import {
  usNyNewYorkMill,
  usNyNewYorkMerc,
  README,
} from "@react-jvectormap/maps";
import {
  usNyNewYorkMill,
  usNyNewYorkMerc,
  README,
} from "@react-jvectormap/newyork";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/NewYork",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: usNyNewYorkMill,
  fileName: "usNyNewYorkMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: usNyNewYorkMerc,
  fileName: "usNyNewYorkMerc",
};
