import { VectorMap } from "@react-jvectormap/core";
import { southAmericaMerc, southAmericaMill } from "@react-jvectormap/maps";
import { VectorMapTemplate } from "../components/MapContainer/VectorMapTemplate";

export default {
  title: "maps/Map/SouthAmerica",
  component: VectorMap,
  argTypes: {},
};

export const Miller = VectorMapTemplate.bind({});
Miller.args = {
  map: southAmericaMerc,
};

export const Mercator = VectorMapTemplate.bind({});
Mercator.args = {
  map: southAmericaMill,
};
